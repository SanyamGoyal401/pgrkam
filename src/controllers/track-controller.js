const {ErrorResponse, SuccessResponse} = require("../utils/common")
const {StatusCodes} = require('http-status-codes')
const {TrackRepository} = require('../repositories');

/**
 * GET:  /
 **/
const trackRepsitory = new TrackRepository();
async function getTrack(req, res){
    try{
        const response = await trackRepsitory.getstats();
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error
        return res.status(error.statusCode)
        .json(ErrorResponse)
    }
}

async function update(req, res){
    try{
        console.log('in update');
        const utm = req.headers['utm'];
        if(utm == 'facebook'){
            console.log('facebook');
            await trackRepsitory.updateFacebook();
        }
        else if(utm == 'linkedin'){
            await trackRepsitory.updateLinkedIn();
        }
        else if(utm == 'instagram'){
            await trackRepsitory.updateInstagram();
        } 
        res.redirect('https://www.pgrkam.com/');
    }
    catch(error){
        ErrorResponse.error = error
        return res.status(error.statusCode)
        .json(ErrorResponse)
    }
}



module.exports = {
    getTrack,
    update,
}