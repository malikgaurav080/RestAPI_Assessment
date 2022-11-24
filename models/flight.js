const mongoose = require('mongoose');
let flightSchema = mongoose.Schema({
    FlightId: String,
    FlightName: String,
    FlightSource : String,
    FlightDestination: String,
    FlightDateTime: String
}) 

module.exports = mongoose.model('Flights', flightSchema, 'Flights')
