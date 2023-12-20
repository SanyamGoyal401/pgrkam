const { Track } = require('../models')
const CrudRepository = require('./crud-repository');
const {id}  = require('../config/server-config')

class TrackRepository extends CrudRepository{
    constructor(){
        super(Track);
    }    

    async updateFacebook(){
        try {
            const res = await Track.findByIdAndUpdate(
                id,
                {$inc: {facebook: 1}},
                {new : true}
            );
            return res;
        } catch (error) {
            throw error;
        }
    }

    async updateInstagram(){
        try {
            const res = await Track.findByIdAndUpdate(
                id,
                {$inc: {instagram: 1}},
                {new : true}
            );
            return res;
        } catch (error) {
            throw error;
        }
    }

    async updateLinkedIn(){
        try {
            const res = await Track.findByIdAndUpdate(
                id,
                {$inc: {linkedin: 1}},
                {new : true}
            );
            return res;
        } catch (error) {
            throw error;
        }
    }
    async getstats(){
        try {
            const res = await Track.findById(id).exec();
            return res;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TrackRepository;