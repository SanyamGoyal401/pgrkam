const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {USER_ROLES_ENUMS} = require("../utils/common/enum")
const {SALT_ROUNDS} = require('../config/server-config') 
const {ADMIN, APPLICANT, EMPLOYER} = USER_ROLES_ENUMS;

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true,
    },
    name: {
        type: String,
        required : true,
    },
    phone : {
        type: Number,
        required: true
    },
    password : {
        type: String,
        required : false,
    },
    role : {
        type : String,
        enum : [ADMIN, APPLICANT, EMPLOYER],
        default : APPLICANT,
        required : true,
    }
},{timestamps: true});

userSchema.pre('save', function(next){
    let user = this;
    if(!user.isModified('password'))return next();

    const encryptedPassword = bcrypt.hashSync(user.password, bcrypt.genSaltSync(+SALT_ROUNDS));
    user.password = encryptedPassword;
    next();
})

const User = new mongoose.model('User', userSchema);

module.exports = User;