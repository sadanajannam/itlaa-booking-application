const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver'); // Import your Driver model

// Endpoint to register a driver
router.post('/register', async (req, res) => {
  const { name, vehicleNumber, licenseNumber, password } = req.body;
  try {
    const newDriver = new Driver({ name, vehicleNumber, licenseNumber, password });
    await newDriver.save();
    res.status(201).json({ message: 'Driver registered successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register driver' });
  }
});

// Endpoint to fetch all drivers
router.get('/drivers', async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch drivers' });
  }
});

module.exports = router;
