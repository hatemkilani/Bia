const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Adjust path as needed
const Order = require('../models/Order'); // Adjust path if you have an order model
const User = require('../models/User'); // Adjust path if you have a user model

// Fetch dashboard statistics dynamically
router.get('/stats', async (req, res) => {
  try {
    // Count total products
    const totalProducts = await Product.countDocuments();

    // Calculate total sales only for confirmed orders
    const totalSales = await Order.aggregate([
      { $match: { status: 'Confirmed' } }, // Only include confirmed orders
      { $group: { _id: null, total: { $sum: '$totalPrice' } } }, // Sum the totalPrice field
    ]);

    // Count active users (optional, adjust as needed)
    const activeUsers = await User.countDocuments({ isActive: true });

    // Return the statistics
    res.json({
      totalProducts,
      totalSales: totalSales[0]?.total || 0, // Use 0 if no sales exist
      activeUsers,
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

module.exports = router;
