const Driver = require('../models/Driver');
const Ride = require('../models/Ride');

const addDriver = async (req, res) => {
  try {
    const { name, licenseNumber, vehicleDetails } = req.body;
    const newDriver = new Driver({ name, licenseNumber, vehicleDetails });
    await newDriver.save();
    res.status(201).json({ message: 'Driver added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding driver' });
  }
};

const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching drivers' });
  }
};

const manageRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rides' });
  }
};

module.exports = { addDriver, getAllDrivers, manageRides };
