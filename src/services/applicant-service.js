const { ApplicantRepository, UserRepository } = require('../repositories')
const { StatusCodes } = require('http-status-codes')
const AppError = require('../utils/errors/app-error')


const applicantRepository = new ApplicantRepository();
const userRepository = new UserRepository();

async function createApplicant(data) {
    try {
        const applicant = await applicantRepository.create(data);
        return applicant
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateApplicant(id, data) {
    try {
        const job = await applicantRepository.update(id, data);
        return job;
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getApplicant() {
    try {
        const job = await applicantRepository.get();
        const data = await Promise.all(job.map(async (item)=>{
            const user = await userRepository.getUserById(item.userId);
            return {
                _id: item._id,
                userId: item.userId,
                constituency: item.constituency,
                gender: item.gender,
                highest_education: item.highest_education,
                district: item.district,
                skills: item.skills,
                agreement: item.agreement,
                email: user.email,
                name: user.name,
                phone: user.phone,
                role: user.role,
            }
        }))
        return data;
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getApplicantById(id) {
    try {
        const applicantData = await applicantRepository.getDataById(id);
        const userData = await userRepository.getUserById(id);
        let applicant = {
            userId: applicantData.userId,
            constituency: applicantData.constituency,
            gender: applicantData.gender,
            highest_education: applicantData.highest_education,
            district: applicantData.district,
            skills: applicantData.skills,
            agreement: applicantData.agreement,
            email: userData.email,
            name: userData.name,
            phone: userData.phone,
            role: userData.role,
        }
        return applicant
    }
    catch (error) {
        console.log(error);
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createApplicant,
    updateApplicant,
    getApplicant,
    getApplicantById,
}