const express = require('express');
const { bookRide, trackRide, bookingHistory } = require('../controllers/rideController');
const router = express.Router();

router.post('/book', bookRide);
router.get('/track/:rideId', trackRide);
router.get('/history/:userId', bookingHistory);

module.exports = router;
