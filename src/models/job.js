const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: false,
    },
    educational_qualification: {
        type: String,
        required : false,
    },
    experience : {
        type: String,
        required : false,
    },
    industry: {
        type: String,
        required : false,
    },
    job_description: {
        type: String,
        required : false,
    },
    location: {
        type: String,
        required : false,
    },
    job_title: {
        type: String,
        required : false,
    },
    salary: {
        type: String,
        required : false,
    },
    post_date: {
        type: String,
        required : false,
    },
    skills: {
        type: [String],
        required : false,
    },
    no_of_vacancies: {
        type: Number,
        required : false,
    },
    max_age: {
        type: Number,
        required : false,
    },
    gender: {
        type: String,
        required : false,
    },    
},{timestamps: true});


const Job = new mongoose.model('Job', jobSchema);

module.exports = Job;