const mongoose = require('mongoose');


const employerSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    jobs : {
        type: [mongoose.Schema.Types.ObjectId],
        required: false
    },
    gender : {
        type: String,
        required : false
    },
    phone : {
        type: Number,
        required : false
    }, 
    organization : {
        type : String,
        required : false
    }
},{timestamps: true});

const Employer = new mongoose.model('Employer', employerSchema);

module.exports = Employer;