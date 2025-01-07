const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const DashboardStats = require('../models/DashboardStats'); // Assuming you have a DashboardStats model

// Fetch all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
      .populate({
        path: 'products.productId',
        select: 'name price',
        options: { strictPopulate: false }, // Handle missing product references
      })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// Create a new order
router.post('/', async (req, res) => {
  try {
    const { clientName, clientPhone, clientAddress, products, totalPrice } = req.body;

    const order = new Order({
      clientName,
      clientPhone,
      clientAddress,
      products,
      totalPrice,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Helper function to update Total Sales
const updateTotalSales = async (amount, operation) => {
  try {
    let stats = await DashboardStats.findOne();
    if (!stats) {
      // Create a new stats record if one doesn't exist
      stats = new DashboardStats({ totalSales: 0 });
    }

    if (operation === 'add') {
      stats.totalSales += amount;
    } else if (operation === 'subtract') {
      stats.totalSales -= amount;
    }

    await stats.save();
  } catch (error) {
    console.error('Error updating total sales:', error);
  }
};

// Update order status
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body; // Get the new status from the request body
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Check if the order status is being changed to "Confirmed"
    if (status === 'Confirmed' && order.status !== 'Confirmed') {
      await updateTotalSales(order.totalPrice, 'add');
    }

    // Check if the order status is being marked as "Failed" and was previously confirmed
    if (status === 'Failed' && order.status === 'Confirmed') {
      await updateTotalSales(order.totalPrice, 'subtract');
    }

    // Update the order status
    order.status = status;
    await order.save();

    res.json(order); // Send the updated order as the response
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Failed to update order status' });
  }
});

module.exports = router;
