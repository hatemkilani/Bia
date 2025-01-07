const DashboardStats = require('../models/DashboardStats');

const resetMonthlyStats = async (req, res, next) => {
  try {
    const stats = await DashboardStats.findOne();

    if (stats) {
      const currentMonth = new Date().getMonth();
      const lastResetMonth = new Date(stats.lastReset).getMonth();

      // If the month has changed, reset the stats
      if (currentMonth !== lastResetMonth) {
        stats.totalSales = 0;
        stats.activeUsers = 0;
        stats.lastReset = new Date();
        await stats.save();
      }
    }

    next();
  } catch (error) {
    console.error('Error resetting monthly stats:', error);
    res.status(500).json({ error: 'Failed to reset monthly stats' });
  }
};

module.exports = resetMonthlyStats;
