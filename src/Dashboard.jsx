import React from 'react';
import Chart from 'react-apexcharts';

const Dashboard = () => {
  const googleAnalyticsData = {
    options: {
      chart: {
        id: 'google-analytics-chart',
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
        data: [20, 30, 25, 40, 39, 50, 60],
      },
      {
        name: 'Bounce Rate',
        data: [10, 15, 12, 20, 18, 25, 30],
      },
      {
        name: 'Page Views',
        data: [100, 120, 110, 150, 140, 160, 180],
      },
      {
        name: 'Avg. Session Duration',
        data: [5, 6, 5.5, 7, 6.5, 8, 9],
      },
    ],
  };

  const googleSearchConsoleData = {
    options: {
      chart: {
        id: 'google-search-console-chart',
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

  return ( 
    <div style={{ width: '100%', margin: 0, padding: 0 }}>

      <h2>Google Analytics Metrics</h2>
      <Chart options={googleAnalyticsData.options} series={googleAnalyticsData.series} type="line" height={350} style={{ width: '100%' }} />
      <h2>Google Search Console Metrics</h2>
      <Chart options={googleSearchConsoleData.options} series={googleSearchConsoleData.series} type="line" height={350} style={{ width: '100%' }} />
      <h2>Facebook Metrics</h2>
      <Chart options={facebookData.options} series={facebookData.series} type="line" height={350} style={{ width: '100%' }} />
      <h2>LinkedIn Metrics</h2>
      <Chart options={linkedinData.options} series={linkedinData.series} type="line" height={350} style={{ width: '100%' }} />
      <h2>Instagram Metrics</h2>
      <Chart options={instagramData.options} series={instagramData.series} type="line" height={350} style={{ width: '100%' }} />
    </div>
  );
};

export default Dashboard;
