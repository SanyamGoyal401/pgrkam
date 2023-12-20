const { ApplicantService } = require('../services')
const { ErrorResponse, SuccessResponse } = require("../utils/common")
const { StatusCodes } = require('http-status-codes')


/**
 * GET:  /applicant
 **/
async function getApplicant(req, res) {
    try {
        const userId = req.query.userId;
        let { constituency, gender, highest_education, skills } = req.query;

        constituency == "All" ? constituency = undefined : constituency = constituency;
        gender == "All" ? gender = undefined : gender = gender;
        highest_education == "All" ? highest_education = undefined : highest_education = highest_education;
        skills === "All" ? skills = undefined : skills = skills;

        let response = userId == undefined ? await ApplicantService.getApplicant() : await ApplicantService.getApplicantById(userId);

        if (!userId) {
            // Filter the data based on the provided filter values
            const filteredData = response.filter(item => {
                return (
                    (!constituency || item.constituency === constituency) &&
                    (!gender || item.gender === gender) &&
                    (!highest_education || item.highest_education === highest_education) &&
                    (!skills || item.skills.includes(skills))
                );
            });
            SuccessResponse.data = filteredData;
        }
        else {
            SuccessResponse.data = response;
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
 * POST:  /job
 * req.body {company_name: 'xyz', ...}
 **/
async function createApplicant(req, res) {
    try {
        const response = await ApplicantService.createApplicant({
            constituency: req.body.constituency,
            gender: req.body.gender,
            highest_education: req.body.highest_education,
            district: req.body.district,
            skills: req.body.skills,
            agreement: req.body.agreement,
            userId: req.body.userId,
            communication: req.body.communication,
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
 * PUT:  /job
 * req.body {company_name: 'xyz', ...}
 **/
async function updateApplicant(req, res) {
    try {
        const applicant = await ApplicantService.getApplicantById(req.body.id);
        const response = await ApplicantService.updateApplicant(req.body.id, {
            constituency: req.body.constituency === undefined ? applicant.constituency : req.body.constituency,
            gender: req.body.gender == undefined ? applicant.gender : req.body.gender,
            highest_education: req.body.highest_education === undefined ? applicant.highest_education : req.body.highest_education,
            district: req.body.district === undefined ? applicant.district : req.body.district,
            skills: req.body.skills === undefined ? applicant.skills : req.body.skills,
            agreement: req.body.agreement === undefined ? applicant.agreement : req.body.agreement,
            communication: req.body.communication === undefined ? applicant.communication : req.body.communication,
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


async function stats(req, res) {
    try {
        const response = await ApplicantService.getApplicant();
        const cityStats = {};

        response.forEach((item) => {
            const district = item.district;

            // Count for the district
            cityStats[district] = (cityStats[district] || 0) + 1;
        });

        // Convert the object to an array of objects
        const result = Object.keys(cityStats).map((district) => ({
            city: district,
            count: cityStats[district],
        }));

        SuccessResponse.data = result;
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
    getApplicant,
    createApplicant,
    updateApplicant,
    stats
}