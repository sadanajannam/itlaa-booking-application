const Ride = require('../models/Ride');

const viewAssignedRides = async (req, res) => {
  try {
    const rides = await Ride.find({ driverId: req.userId });
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rides' });
  }
};

module.exports = { viewAssignedRides };
