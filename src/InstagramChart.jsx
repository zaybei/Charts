import React from 'react';
import Chart from 'react-apexcharts';

const InstagramChart = ({ selectedMetric, data }) => {
  const chartData = {
    options: {
      chart: {
        id: 'instagram-chart',
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
    },
    series: data.series.filter(series => series.name === selectedMetric),
  };

  return (
    <div>
      <h2>{selectedMetric} - Instagram Metrics</h2>
      <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default InstagramChart;
