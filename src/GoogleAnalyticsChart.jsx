import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './GoogleAnalyticsChart.css'; // Import the CSS file

const GoogleAnalyticsChart = ({ data }) => {
  const [selectedMetric, setSelectedMetric] = useState('Impressions');
  const [selectedTimeframe, setSelectedTimeframe] = useState('24 hours');

  const metrics = ['Impressions', 'Sessions', 'Bounce Rate', 'Page Views', 'Avg. Session Duration'];

  const generateRandomData = (metric, timeframe) => {
    switch (metric) {
      case 'Impressions':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => Math.floor(Math.random() * 1000) + 100); // Dummy data for last 24 hours
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000) + 100); // Dummy data for last week
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 100); // Dummy data for last 30 days
        } else if (timeframe === '30 days') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 100); // Dummy data for last 30 days
        }

      case 'Sessions':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => Math.floor(Math.random() * 100) + 20);
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 20);
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 20);
        } else if (timeframe === '30 days') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 20); // Dummy data for last 30 days
        }

        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => Math.floor(Math.random() * 100) + 20);
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 20);
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 20);
        }
      case 'Bounce Rate':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => Math.floor(Math.random() * 20) + 10);
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => Math.floor(Math.random() * 20) + 10);
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 10);
        }
      case 'Page Views':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => Math.floor(Math.random() * 500) + 100); // Dummy data for last 24 hours
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => Math.floor(Math.random() * 500) + 100); // Dummy data for last week
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => Math.floor(Math.random() * 500) + 100); // Dummy data for last 30 days
        }
      case 'Avg. Session Duration':
        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => (Math.random() * 5 + 5).toFixed(1)); // Dummy data for last 24 hours
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => (Math.random() * 5 + 5).toFixed(1)); // Dummy data for last week
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => (Math.random() * 5 + 5).toFixed(1)); // Dummy data for last 30 days
        } else if (timeframe === '30 days') {
          return Array.from({ length: 30 }, () => (Math.random() * 5 + 5).toFixed(1)); // Dummy data for last 30 days
        }

        if (timeframe === '24 hours') {
          return Array.from({ length: 24 }, () => (Math.random() * 5 + 5).toFixed(1)); // Dummy data for last 24 hours
        } else if (timeframe === '7 days') {
          return Array.from({ length: 7 }, () => (Math.random() * 5 + 5).toFixed(1)); // Dummy data for last week
        } else if (timeframe === 'Monthly') {
          return Array.from({ length: 30 }, () => (Math.random() * 5 + 5).toFixed(1)); // Dummy data for last 30 days
        }
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
        categories: selectedTimeframe === '24 hours' ? Array.from({ length: 24 }, (_, i) => `Hour ${i + 1}`) :
                   selectedTimeframe === '7 days' ? Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`) :
                   Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      },
    },
    series: [
      {
        name: selectedMetric,
        data: generateRandomData(selectedMetric, selectedTimeframe),
      },
    ],
  };

  return (
    <div>
      <h2>{selectedMetric} - Google Analytics Metrics</h2>
      <div className="dropdown-container"> {/* Apply the new CSS class */}
        <div>
          <label htmlFor="timeframe">Select Timeframe:</label>
          <select
            id="timeframe"
            className="dropdown" // Apply the CSS class
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
            className="dropdown" // Apply the CSS class
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

export default GoogleAnalyticsChart;
