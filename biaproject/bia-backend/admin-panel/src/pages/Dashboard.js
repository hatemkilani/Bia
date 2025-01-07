import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalSales: 0,
    activeUsers: 0,
  });

  const [chartData, setChartData] = useState(null); // Chart data for dynamic updates

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/dashboard/stats');
      setStats(response.data);

      // Prepare chart data dynamically after fetching stats
      setChartData({
        labels: ['Total Products', 'Total Sales', 'Active Users'],
        datasets: [
          {
            label: 'Overview',
            data: [
              response.data.totalProducts,
              response.data.totalSales,
              response.data.activeUsers,
            ],
            backgroundColor: ['#4caf50', '#2196f3', '#ff5722'], // Colors for each bar
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Dashboard Statistics',
      },
    },
  };

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-bold">Total Products</h2>
          <p className="text-2xl">{stats.totalProducts}</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-bold">Total Sales</h2>
          <p className="text-2xl">${stats.totalSales}</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-bold">Active Users</h2>
          <p className="text-2xl">{stats.activeUsers}</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Dashboard Charts</h2>
        {chartData ? (
          <Bar data={chartData} options={chartOptions} />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
