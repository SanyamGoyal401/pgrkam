const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    constituency: {
        type: String,
        required : true,
    },
    skills: {
        type: [String],
        required : false,
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