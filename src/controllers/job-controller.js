const {JobService} = require('../services')
const {ErrorResponse, SuccessResponse} = require("../utils/common")
const {StatusCodes} = require('http-status-codes')


/**
 * GET:  /job
 **/
async function getJob(req, res){
    try{
        const response = await JobService.getJob();
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
 * POST:  /job
 * req.body {company_name: 'xyz', ...}
 **/
async function createJob(req, res){
    try{
        const response = await JobService.createJob({
            company_name : req.body.company_name,
            educational_qualification: req.body.educational_qualification,
            experience: req.body.experience,
            industry : req.body.industry,
            job_description : req.body.job_description,
            location: req.body.location,
            job_title: req.body.job_title,
            salary: req.body.salary,
            post_date: req.body.post_date,
            skills: req.body.skills,
            no_of_vacancies: req.body.no_of_vacancies,
            max_age: req.body.max_age,
            gender: req.body.gender
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


/**
 * PUT:  /job
 * req.body {company_name: 'xyz', ...}
 **/
async function updateJob(req, res){
    try{
        const job = await JobService.getJobById(req.body.id);
        const response = await JobService.updateJob(req.body.id,{
            company_name : req.body.company_name === undefined ? job.company_name : req.body.company_name,
            educational_qualification: req.body.educational_qualification == undefined ? job.educational_qualification : req.body.educational_qualification,
            experience: req.body.experience === undefined ? job.experience : req.body.experience,
            industry : req.body.industry === undefined ? job.industry : req.body.industry,
            job_description : req.body.job_description === undefined ? job.job_description : req.body.job_description,
            location: req.body.location === undefined ? job.location : req.body.location,
            job_title: req.body.job_title === undefined ? job.job_title : req.body.job_title,
            salary: req.body.salary === undefined ? job.salary : req.body.salary,
            post_date: req.body.post_date === undefined ? job.post_date : req.body.post_date,
            skills: req.body.skills === undefined ? job.skills : req.body.skills,
            no_of_vacancies: req.body.no_of_vacancies === undefined ? job.no_of_vacancies : req.body.no_of_vacancies,
            max_age: req.body.max_age === undefined ? job.max_age : req.body.max_age,
            gender: req.body.gender === undefined ? job.gender : req.body.gender,
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
    getJob,
    createJob,
    updateJob,
}