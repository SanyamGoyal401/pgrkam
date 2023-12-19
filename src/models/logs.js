const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    featurename: {
        type: String,
        required : true,
    },
    entertime: {
        type: String,
        required : false,
    },
    exittime: {
        type: String,
        required : false,
    },
},{timestamps: true});


const Log = new mongoose.model('Log', logSchema);

module.exports = Log;