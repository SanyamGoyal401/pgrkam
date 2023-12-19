const {LogService} = require('../services')
const {ErrorResponse, SuccessResponse} = require("../utils/common")
const {StatusCodes} = require('http-status-codes')


/**
 * GET:  /log
 **/
async function getLog(req, res){
    try{
        const response = await LogService.getLog();
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

/**
 * POST:  /log
 * req.body {featurename: 'HomePage', 'entertime': '', 'exittime': ''}
 **/
async function createLog(req, res){
    try{
        const response = await LogService.createLog({
            featurename: req.body.featurename,
            entertime: req.body.entertime,
            exittime: req.body.exittime
        });
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


module.exports = {
    getLog,
    createLog,
}