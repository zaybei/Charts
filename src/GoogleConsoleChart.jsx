import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './GoogleAnalyticsChart.css'; // Import the CSS file for styling

const GoogleConsoleChart = ({ data }) => {
  const [selectedMetric, setSelectedMetric] = useState('Clicks');
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 30 days');

  const metrics = ['Clicks', 'Impressions', 'CTR', 'Average Position'];

  const generateRandomData = (metric, timeframe) => {
    switch (metric) {
      case 'Clicks':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => Math.floor(Math.random() * 100) + 20);
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 20);
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 20);
        } else if (timeframe === '30 days') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 20);
        }
      case 'Impressions':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => Math.floor(Math.random() * 1000) + 100);
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000) + 100);
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 100);
        } else if (timeframe === '30 days') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 100);
        }
      case 'CTR':
        // Add logic for CTR if needed
        return [];
      case 'Average Position':
        // Add logic for Average Position if needed
        return [];
      default:
        return [];
    }
  };

  const chartData = {
    options: {
      chart: {
        id: 'google-console-chart',
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
      <h2>{selectedMetric} - Google Search Console Metrics</h2>
      <div className="dropdown-container">
        <div>
          <label htmlFor="timeframe">Select Timeframe:</label>
          <select
            id="timeframe"
            className="dropdown"
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
          >
            <option value="24 hours">Last 24 hours</option>
            <option value="7 days">Last 7 days</option>
            <option value="Monthly">Last 30 days</option>
            <option value="30 days">Last 30 days</option>
          </select>
        </div>

        <div>
          <label htmlFor="metrics">Select Metric:</label>
          <select
            id="metrics"
            className="dropdown"
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
          >
            {metrics.map((metric) => (
              <option key={metric} value={metric}>{metric}</option>
            ))}
          </select>
        </div>
      </div>

      <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default GoogleConsoleChart;
