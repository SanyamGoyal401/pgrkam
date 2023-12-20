const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    instagram: {
        type: Number,
        required : false,
        default: 0
    },
    facebook: {
        type: Number,
        required : false,
        default: 0
    },
    linkedin: {
        type: Number,
        required : false,
        default: 0
    },
},{timestamps: true});


const Track = new mongoose.model('Track', trackSchema);

module.exports = Track;