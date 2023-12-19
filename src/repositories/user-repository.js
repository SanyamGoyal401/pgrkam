const { User } = require('../models')
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }    

    async getUserByEmail(email){
        try {
            const user = await User.findOne({email});
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;