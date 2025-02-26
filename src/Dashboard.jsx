import React, { useState } from 'react';
import GoogleAnalyticsChart from './GoogleAnalyticsChart';
import GoogleSearchConsoleChart from './GoogleSearchConsoleChart';
import FacebookChart from './FacebookChart';
import LinkedInChart from './LinkedInChart';
import InstagramChart from './InstagramChart';

const Dashboard = () => {
  const googleAnalyticsData = {
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
        name: 'Impressions',
        data: [30, 40, 35, 50, 49, 60, 70],
      },
      {
        name: 'Sessions',
        data: [20, 30, 25, 40, 39, 50, 60], // Dummy data for Sessions
      },
      {
        name: 'Bounce Rate',
        data: [10, 15, 12, 20, 18, 25, 30], // Dummy data for Bounce Rate
      },
      {
        name: 'Page Views',
        data: [100, 120, 110, 150, 140, 160, 180],
      },
      {
        name: 'Avg. Session Duration',
        data: [5, 6, 5.5, 7, 6.5, 8, 9], // Dummy data for Avg. Session Duration
      },
    ],
  };

  const googleSearchConsoleData = {
    options: {
      chart: {
        id: 'google-search-console-chart',
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
        name: 'Clicks',
        data: [15, 20, 18, 25, 22, 30, 35],
      },
      {
        name: 'CTR',
        data: [1.5, 2.0, 1.8, 2.5, 2.2, 3.0, 3.5],
      },
      {
        name: 'Keyword Performance',
        data: [100, 120, 110, 150, 140, 160, 180],
      },
      {
        name: 'Average Position',
        data: [5, 4, 4.5, 3, 3.5, 2, 1],
      },
    ],
  };

  const facebookData = {
    options: {
      chart: {
        id: 'facebook-chart',
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
        name: 'Reach',
        data: [1000, 1200, 1100, 1500, 1400, 1600, 1800],
      },
      {
        name: 'Impressions',
        data: [800, 900, 850, 1000, 950, 1100, 1200],
      },
      {
        name: 'Engagement',
        data: [200, 250, 230, 300, 280, 350, 400],
      },
      {
        name: 'Clicks',
        data: [50, 60, 55, 70, 65, 80, 90],
      },
      {
        name: 'Follower Growth',
        data: [20, 30, 25, 40, 35, 50, 55],
      },
      {
        name: 'Post Performance',
        data: [150, 200, 180, 220, 210, 250, 300],
      },
    ],
  };

  const linkedinData = {
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
    series: [
      {
        name: 'Reach',
        data: [800, 900, 850, 1000, 950, 1100, 1200],
      },
      {
        name: 'Impressions',
        data: [600, 700, 650, 800, 750, 900, 1000],
      },
      {
        name: 'Engagement',
        data: [150, 180, 160, 200, 190, 220, 250],
      },
      {
        name: 'Clicks',
        data: [30, 40, 35, 50, 45, 60, 65],
      },
      {
        name: 'Follower Growth',
        data: [10, 15, 12, 20, 18, 25, 30],
      },
      {
        name: 'Post Performance',
        data: [120, 150, 140, 170, 160, 200, 230],
      },
    ],
  };

  const instagramData = {
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
    series: [
      {
        name: 'Reach',
        data: [900, 1100, 1000, 1300, 1200, 1400, 1600],
      },
      {
        name: 'Impressions',
        data: [700, 800, 750, 900, 850, 1000, 1100],
      },
      {
        name: 'Engagement',
        data: [180, 220, 200, 250, 240, 300, 350],
      },
      {
        name: 'Clicks',
        data: [40, 50, 45, 60, 55, 70, 75],
      },
      {
        name: 'Follower Growth',
        data: [15, 25, 20, 30, 28, 35, 40],
      },
      {
        name: 'Post Performance',
        data: [130, 170, 160, 190, 180, 220, 250],
      },
    ],
  };

  const [selectedGoogleAnalyticsMetric, setSelectedGoogleAnalyticsMetric] = useState('Impressions');
  const [selectedSearchConsoleMetric, setSelectedSearchConsoleMetric] = useState('Clicks');
  const [selectedFacebookMetric, setSelectedFacebookMetric] = useState('Reach');
  const [selectedLinkedInMetric, setSelectedLinkedInMetric] = useState('Reach');
  const [selectedInstagramMetric, setSelectedInstagramMetric] = useState('Reach');
  const [selectedTimeframe, setSelectedTimeframe] = useState('24 hours');

  return (
    <div style={{ width: '70%', margin: 0, padding: '40px' }}>
      <GoogleAnalyticsChart selectedMetric={selectedGoogleAnalyticsMetric} data={googleAnalyticsData} />
      <GoogleSearchConsoleChart selectedMetric="Clicks" data={googleSearchConsoleData} />
      <FacebookChart selectedMetric="Reach" data={facebookData} />
      <LinkedInChart selectedMetric="Reach" data={linkedinData} />
      <InstagramChart selectedMetric="Reach" data={instagramData} />
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
      <GoogleAnalyticsChart selectedMetric={selectedGoogleAnalyticsMetric} data={googleAnalyticsData} />
      <GoogleAnalyticsChart selectedMetric="Reach" data={googleAnalyticsData} />
      <GoogleAnalyticsChart selectedMetric="User Engagement" data={googleAnalyticsData} />
      <GoogleSearchConsoleChart selectedMetric={selectedSearchConsoleMetric} data={googleSearchConsoleData} />
      <FacebookChart selectedMetric={selectedFacebookMetric} data={facebookData} />
      <LinkedInChart selectedMetric={selectedLinkedInMetric} data={linkedinData} />
      <InstagramChart selectedMetric={selectedInstagramMetric} data={instagramData} />
    </div>
  );
};

export default Dashboard;
