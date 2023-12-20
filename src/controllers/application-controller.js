const { ApplicationService } = require('../services')
const { ErrorResponse, SuccessResponse } = require("../utils/common")
const { StatusCodes } = require('http-status-codes')


/**
 * GET:  /applicant
 **/
async function getApplication(req, res) {
    try {
        const userId = req.query.userId;
        const jobId = req.query.jobId;

        if (userId && jobId) {
            const data = await ApplicationService.getDataByUserIdAndJobId(userId, jobId);
            SuccessResponse.data = data;
        }
        else if(userId){
            const data = await ApplicationService.getDataByUserId(userId);
            SuccessResponse.data = data;
        }
        else if(jobId){
            const data = await ApplicationService.getDataByJobId(jobId);
            SuccessResponse.data = data;
        }
        else{
            const data = await ApplicationService.getApplication();
            SuccessResponse.data = data;
        }
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode)
            .json(ErrorResponse)
    }
}

/**
 * POST:  /application
 * req.body {userId, jobId, status}
 **/
async function createApplication(req, res) {
    try {
        const response = await ApplicationService.createApplication({
            userId: req.body.userId,
            jobId: req.body.jobId,
            status: req.body.status,
        });
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode)
            .json(ErrorResponse)
    }
}


/**
 * DELETE:  /appication
 * req.body {userId, jobId}
 **/
async function deleteApplication(req, res) {
    try {
        const response = await ApplicationService.deleteApplication(req.body.userId,req.body.jobId);
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode)
            .json(ErrorResponse)
    }
}
/**
 * PUT:  /job
 * req.body {status: 'pending', ...}
 **/
async function updateApplication(req, res) {
    try {
        const response = await ApplicationService.updateApplication(req.body.userId,req.body.jobId, {
            status: req.body.status
        });
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode)
            .json(ErrorResponse)
    }
}

module.exports = {
    getApplication,
    createApplication,
    updateApplication,
    deleteApplication,
}