const express = require('express');
const controller = require('../controllers/flightController');
const router = express.Router();

router.get('/flights', controller.GetAllFlights);
router.get('/flights/:id', controller.GetFlightById); 
router.get('/flights/:id', controller.GetFlightByDate);

// router.put('/flights/:id', controller.GetFlightBySnD); 


router.post('/flights', controller.AddFlight);
router.put('/flights/:id', controller.UpdateFlight);
router.delete('/flights/:id', controller.DeleteFlightById);

module.exports = router;



// - GET https://localhost:`port`/api/flights?source=`source`&dest=`dest`  (use query string for taking parameters)
// - GET https://localhost:`port`/api/flights/date/`flight_date`
