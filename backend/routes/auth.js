const express = require('express');
const router = express.Router();

// Example controller function (You can replace this with your actual controller)
const loginUser = (req, res) => {
  const { username, password } = req.body;
  // Your logic to authenticate the user goes here
  if (username === 'admin' && password === 'password') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Define the POST route with the correct callback function
router.post('/login', loginUser);

module.exports = router;
