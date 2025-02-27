import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './GoogleSearchConsoleChart.css';

const GoogleSearchConsoleChart = ({ data }) => {
  const [selectedMetric, setSelectedMetric] = useState('ALL');
  const [selectedTimeframe, setSelectedTimeframe] = useState('24 hours');

  const metrics = ['ALL', 'Clicks', 'CTR', 'Keyword Performance', 'Average Position'];

  const generateRandomData = (metric, timeframe) => {
    switch (metric) {
      case 'Clicks':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => Math.floor(Math.random() * 100) + 20);
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 20);
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 20);
        }
      case 'CTR':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => (Math.random() * 5).toFixed(2));
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => (Math.random() * 5).toFixed(2));
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => (Math.random() * 5).toFixed(2));
        }
      case 'Keyword Performance':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => Math.floor(Math.random() * 1000) + 100);
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000) + 100);
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 100);
        }
      case 'Average Position':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => (Math.random() * 10 + 1).toFixed(1));
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => (Math.random() * 10 + 1).toFixed(1));
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => (Math.random() * 10 + 1).toFixed(1));
        }
      default:
        return [];
    }
  };

  const chartData = {
    options: {
      chart: {
        id: 'google-search-console-chart',
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: selectedTimeframe === '24 hours' ? Array.from({ length: 24 }, (_, i) => `Hour ${i + 1}`) :
                   selectedTimeframe === '7 days' ? Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`) :
                   Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
    },
    series: selectedMetric === 'ALL' 
      ? metrics
          .filter(metric => metric !== 'ALL')
          .map(metric => ({
            name: metric,
            data: generateRandomData(metric, selectedTimeframe),
          }))
      : [{
          name: selectedMetric,
          data: generateRandomData(selectedMetric, selectedTimeframe),
        }],
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

export default GoogleSearchConsoleChart;
