import React from 'react';
import Chart from 'react-apexcharts';

const LinkedInChart = ({ selectedMetric, data }) => {
  const chartData = {
    options: {
      chart: {
        id: 'linkedin-chart',
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
      <h2>{selectedMetric} - LinkedIn Metrics</h2>
      <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default LinkedInChart;
