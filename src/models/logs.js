const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        required : true,
    },
    type : {
        type: String,
        required : false,
    },
    featurename: {
        type: Number,
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