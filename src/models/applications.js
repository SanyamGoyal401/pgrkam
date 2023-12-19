const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    userId: {
        type : [mongoose.Schema.Types.ObjectId],
        required : true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
    },
    date : {
        type: Date,
        required : false,
    },
},{timestamps: true});

const Application = new mongoose.model('Application', applicationSchema);

module.exports = Application;