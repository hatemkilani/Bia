const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Import the User model
const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // If successful, generate a token or send success response
    return res.json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
