const { Job } = require('../models');
const mongoose = require('mongoose');
const CrudRepository = require('./crud-repository');

class JobRepository extends CrudRepository{
    constructor(){
        super(Job);
    }

    async getJobById(id) {
        try {
            const response = await this.model.findById(id).exec();
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = JobRepository;