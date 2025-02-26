import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const GoogleAnalyticsChart = ({ data }) => {
  const [selectedMetric, setSelectedMetric] = useState('Impressions');
  const [selectedTimeframe, setSelectedTimeframe] = useState('24 hours');

  const metrics = ['Impressions', 'Sessions', 'Bounce Rate', 'Page Views', 'Avg. Session Duration'];

  const generateRandomData = (metric) => {
    switch (metric) {
      case 'Impressions':
        return Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000) + 100);
      case 'Sessions':
        return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 20);
      case 'Bounce Rate':
        return Array.from({ length: 7 }, () => Math.floor(Math.random() * 20) + 10);
      case 'Avg. Session Duration':
        return Array.from({ length: 7 }, () => (Math.random() * 5 + 5).toFixed(1));
      default:
        return [];
    }
  };

  const chartData = {
    options: {
      chart: {
        id: 'google-analytics-chart',
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
    },
    series: [
      {
        name: selectedMetric,
        data: generateRandomData(selectedMetric),
      },
    ],
  };

  return (
    <div>
      <h2>{selectedMetric} - Google Analytics Metrics</h2>
      <div>
        <label htmlFor="timeframe">Select Timeframe:</label>
        <select
          id="timeframe"
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
        >
          <option value="24 hours">Last 24 hours</option>
          <option value="7 days">Last 7 days</option>
          <option value="Monthly">Last 30 days</option>
        </select>
      </div>

      <div>
        <label htmlFor="metrics">Select Metric:</label>
        <select
          id="metrics"
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
        >
          {metrics.map((metric) => (
            <option key={metric} value={metric}>{metric}</option>
          ))}
        </select>
      </div>

      <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default GoogleAnalyticsChart;
