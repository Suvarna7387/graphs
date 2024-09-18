import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = () => {
  // Sample data for the line chart
  const data = {
    labels: [0, 2, 4, 6, 8, 10],
    datasets: [
      {
        label: 'AG',
        data: [0, 2, 3, 4, 2, 0],
        borderColor: 'rgba(1, 102, 255, 0.8)',
        backgroundColor: 'rgba(1, 102, 255, 0.3)',
        fill: true, // Fill to the x-axis
        tension: 0.4, // Smooth line
      },
      {
        label: 'IPS',
        data: [1, 2, 5, 2, 3, 4],
        borderColor: 'rgba(255, 0, 0, 0.8)',
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        fill: true, // Fill to the x-axis
        tension: 0.4,
      },
      {
        label: 'V1',
        data: [1, 2, 5, 3, 4, 2],
        borderColor: 'rgba(0, 255, 150, 0.8)',
        backgroundColor: 'rgba(0, 255, 150, 0.3)',
        fill: true, // Fill to the x-axis
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'X Axis',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y Axis',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
    responsive: true,
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
