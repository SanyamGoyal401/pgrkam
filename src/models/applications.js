const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    userId: {
        type : [String],
        required : true,
    },
    jobId: {
        type: String,
        required : true,
    },
    date : {
        type: String,
        required : false,
    },
},{timestamps: true});

const Application = new mongoose.model('Application', applicationSchema);

module.exports = Application;