const { Log } = require('../models');
const CrudRepository = require('./crud-repository');

class LogRepository extends CrudRepository{
    constructor(){
        super(Log);
    }
}

module.exports = LogRepository;