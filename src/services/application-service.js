const { ApplicationRepository } = require('../repositories')
const { StatusCodes } = require('http-status-codes')
const AppError = require('../utils/errors/app-error')

const applicationRepository = new ApplicationRepository();

async function createApplication(data) {
    try {
        const application = await applicationRepository.create(data);
        return application;
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateApplication(userId, jobId, data) {
    try {
        const application = await applicationRepository.update(userId, jobId, data);
        return application;
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getApplication() {
    try {
        const application = await applicationRepository.get();
        return application;
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getDataByUserId(userId) {
    try {
        const application = await applicationRepository.getDataByUserId(userId);
        return application
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getDataByJobId(jobId) {
    try {
        const application = await applicationRepository.getDataByJobId(jobId);
        return application
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getDataByUserIdAndJobId(userId, jobId) {
    try {
        const application = await applicationRepository.getDataByUserIdAndJobId(userId, jobId);
        return application
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteApplication(userId, jobId) {
    try {
        const application = await applicationRepository.delete(userId, jobId);
        return application
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



module.exports = {
    createApplication,
    updateApplication,
    deleteApplication,
    getDataByUserIdAndJobId,
    getDataByJobId,
    getDataByUserId,
    getApplication,
    deleteApplication,
}