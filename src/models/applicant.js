const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    number: {
        type: Number,
        required : true,
    },
    constituency: {
        type: String,
        required : true,
    },
    gender: {
        type: String,
        required : false,
    },
    highest_education: {
        type: String,
        required : false,
    },
    district: {
        type: Number,
        required : false,
    },
    select_the_course: {
        type: String,
        required : false,
    },
    agreement: {
        type: Boolean,
        required : false,
    },
    communication: {
        type: String,
        required : false,
    }
},{timestamps: true});

const Applicant = new mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;