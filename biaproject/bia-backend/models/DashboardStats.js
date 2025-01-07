const mongoose = require('mongoose');

const DashboardStatsSchema = new mongoose.Schema({
  totalSales: {
    type: Number,
    default: 0,
  },
  totalProducts: {
    type: Number,
    default: 0,
  },
  activeUsers: {
    type: Number,
    default: 0,
  },
  resetDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DashboardStats', DashboardStatsSchema);
