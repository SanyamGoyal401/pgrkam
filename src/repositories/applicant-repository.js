const { Applicant } = require('../models');
const CrudRepository = require('./crud-repository');

class ApplicantRepository extends CrudRepository {
    constructor() {
        super(Applicant);
    }

    async getDataById(userId) {
        try {
            const response = await this.model.findOne({
                userId
            });
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async update(userId, data) {
        try {
            const response = await this.model.findOneAndUpdate(
                { userId },
                data,
                {
                    new: true
                }
            );
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = ApplicantRepository;