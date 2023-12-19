const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    description : {
        type: String,
        required : false,
    },
    salary: {
        type: Number,
        required : true,
    },
    location: {
        type: String,
        required : false,
    },
    interest: {
        type: [String],
        required : false,
    },
    minimum_qualification: {
        type: String,
        required : false,
    },
    eligibility: {
        type: String,
        required : false,
    },
    type: {
        type: String,
        required : false,
    },
    category: {
        type: String,
        required : false,
    }
},{timestamps: true});


const Job = new mongoose.model('Job', jobSchema);

module.exports = Job;