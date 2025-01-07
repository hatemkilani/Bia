import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardCharts = ({ data }) => {
  const chartData = {
    labels: ['Products', 'Sales', 'Users'],
    datasets: [
      {
        label: 'Dashboard Statistics',
        data: [data.totalProducts, data.totalSales, data.activeUsers],
        backgroundColor: ['#4caf50', '#2196f3', '#ff5722'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Overview',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Dashboard Charts</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default DashboardCharts;
