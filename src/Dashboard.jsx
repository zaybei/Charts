import React from 'react';
import Chart from 'react-apexcharts';

const Dashboard = () => {
  const data = {
    options: {
      chart: {
        id: 'metrics-chart',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
    },
    series: [
      {
        name: 'Impressions',
        data: [30, 40, 35, 50, 49, 60, 70],
      },
      {
        name: 'Clicks',
        data: [20, 30, 25, 40, 39, 50, 60],
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard Metrics</h2>
      <Chart options={data.options} series={data.series} type="line" height={350} />
    </div>
  );
};

export default Dashboard;
