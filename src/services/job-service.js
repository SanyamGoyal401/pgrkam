const { JobRepository } = require('../repositories')
const { StatusCodes } = require('http-status-codes')
const AppError = require('../utils/errors/app-error')

const jobRepository = new JobRepository();

async function createJob(data) {
    try {
        const job = await jobRepository.create(data);
        return job
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateJob(id, data) {
    try {
        const job = await jobRepository.update(id, data);
        return job;
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getJob() {
    try {
        const job = await jobRepository.get();
        return job
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getJobById(id) {
    try {
        const job = await jobRepository.getJobById(id);
        return job
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createJob,
    updateJob,
    getJob,
    getJobById,
}