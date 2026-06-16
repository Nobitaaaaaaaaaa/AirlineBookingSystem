const CrudRepository = require('./crud-repository');
const { Airport } = require('../models')

class AirportRepository extends CrudRepository {
    constructor () {
        console.log(Airport)
        super(Airport)
    }
}

module.exports = AirportRepository