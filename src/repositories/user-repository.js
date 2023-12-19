const { User } = require('../models')
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }    

    async getUserById(id){
        try {
            const user = await User.findById(id).exec();
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail(email){
        try {
            const user = await User.findOne({email});
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updateTimestamps(id){
        try {
            const response = await User.findByIdAndUpdate(id, {$currentDate: {updatedAt: true}}, {new: true});
            console.log(response);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;