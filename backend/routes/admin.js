const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin'); // Import your Admin model

// Example endpoint to fetch all admins
router.get('/admins', async (req, res) => {
  try {
    const admins = await Admin.find(); // Fetch from the database
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch admins' });
  }
});

module.exports = router;
