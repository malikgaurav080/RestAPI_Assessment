const flight = require('../models/flight');
const { v4: uuidv4 } = require('uuid');


function GetAllFlights(req, res) {
    flight.find({}, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.send(err);
        }
    });
}

function GetFlightById(req, res) { 
    flight.findById(req.params.FlightId, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.send(err);
        }
    });
}

function GetFlightByDate(req, res) { 
    flight.findById(req.params.FlightDateTime, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.send(err);
        }
    });
}


// function GetFlightBySnD(req, res) { 
//     flight.findById(req.params.FlightDateTime, (err, docs) => {
//         if (!err) {
//             res.status(200).send(docs);
//         } else {
//             res.send(err);
//         }
//     });
// }

function AddFlight(req, res) {
    let newflight = new flight({
        FlightId: uuidv4(),
        FlightName: req.body.FlightName,
        FlightSource: req.body.FlightSource,
        FlightDestination: req.body.FlightDestination,
        FlightDateTime: req.body.FlightDateTime
    });
    newflight.save((err) => {
        if (!err) {
            res.status(201).send({ message: 'Flights Added Successfully' });
        } else {
            throw err;
        }
    });
}

function UpdateFlight(req, res) {
    flight.findById(req.params.FlightId, (err, docs) => {
        if (!err) {
            if (docs == null) {
                res.status(404).send({ message: `Product with specified id: ${req.params.FlightId} does not exists` });
            } else {
                flight.updateOne({ FlightId: req.params.FlightId }, {
                    FlightName: req.body.FlightName,
                    FlightSource: req.body.FlightSource,
                    FlightDestination: req.body.FlightDestination,
                    FlightDateTime: req.body.FlightDateTime
                }, (err, docs) => {
                    if (!err) {
                        res.status(200).send({ message: 'Flights Updated Successfully' });
                    } else {
                        throw err;
                    }
                });
            }
        } else {
            res.send(err);
        }
    });
}

function DeleteFlightById(req, res) {
    flight.deleteOne({ FlightId: req.params.FlightId }, (err, docs) => {
        if (!err) {
            res.status(200).send({ message: 'Flights Deleted Successfully' });
        } else {
            throw err;
        }
    });
}

module.exports = { GetAllFlights, GetFlightById, AddFlight, UpdateFlight, DeleteFlightById, GetFlightByDate }