const { Application } = require('../models');
const CrudRepository = require('./crud-repository');

class ApplicationRepository extends CrudRepository {
    constructor() {
        super(Application);
    }

    async getDataByUserId(userId) {
        try {
            const response = await this.model.find({
                userId
            });
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async getDataByJobId(jobId) {
        try {
            const response = await this.model.find({
                jobId
            });
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async getDataByUserIdAndJobId(userId, jobId){
        try {
            const response = await this.model.find(
                {userId, jobId}
            );
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async update(userId, jobId, data) {
        try {
            const response = await this.model.findOneAndUpdate(
                { userId, jobId },
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
    async delete(userId,jobId) {
        try {
            const response = await this.model.findOneAndDelete(
                { userId, jobId },
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

module.exports = ApplicationRepository;