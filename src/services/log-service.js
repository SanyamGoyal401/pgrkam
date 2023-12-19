const { LogRepository } = require('../repositories')
const { StatusCodes } = require('http-status-codes')
const AppError = require('../utils/errors/app-error')

const logRepository = new LogRepository();

async function createLog(data) {
    try {
        const log = await logRepository.create(data);
        return log
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getLog() {
    try {
        const log = await logRepository.get();
        return log
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createLog,
    getLog,
}