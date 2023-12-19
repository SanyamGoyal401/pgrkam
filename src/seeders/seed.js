const users = require('./user.json')
const {UserService} = require('../services')
async function seedUser(){
    console.log(users);
    users.forEach(async(data)=>{
        var data = await UserService.createUser(data);
    })
}

module.exports = {
    seedUser,
}