const {UserService, ApplicantService, JobService} = require('../services')
const {ErrorResponse, SuccessResponse} = require("../utils/common")
const {StatusCodes} = require('http-status-codes')
const axios = require('axios');

/**
 * GET:  /
 **/
async function getUser(req, res){
    try{
        const response = await UserService.getUser();
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
 * POST:  /signup
 * req.body {email: 'user@gmail.com', password: "dsfj9sdjfoijw09"}
 **/
async function createUser(req, res){
    try{
        const response = await UserService.createUser({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password,
            role : req.body.role,
            phone : req.body.phone,
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
async function signin(req, res){
    try{
        const response = await UserService.signin({
            email: req.body.email,
            password: req.body.password
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

async function isAuthenticated(req, res){
    try{
        const response = await UserService.isAuthenticated(req.headers['authorization']);
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

async function recommend(req, res){
    try {
        const applicant = await ApplicantService.getApplicantById(req.user._id);
        console.log("applicant = ", applicant);
        const skills = applicant.skills.join(' | ');
        console.log("skills = ", skills);
        const response = await axios.post('https://recommendation-service-hrdr.onrender.com', {
            user_info : skills
        });
        console.log("response = ", response.data);
        let data = response.data;
        data = await Promise.all(data.map(async (item)=>{
            const job = await JobService.getJobById(item._id);
            return {
                success: item.Similarity*100,
                job
            }
        }));
        console.log(data);
        SuccessResponse.data = data;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode)
        .json(ErrorResponse)
    }
}

module.exports = {
    createUser,
    signin,
    isAuthenticated,
    getUser,
    recommend,
}