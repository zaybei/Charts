import React from 'react';
import './App.css';
import Dashboard from './Dashboard';


const App = () => {
  return (
    <div className="app" style={{
      backgroundColor: '#ffffff', /* Set background to light */
      color: '#000000' /* Set text color to dark */

    }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Marketing Dashboard</h1>
      <Dashboard />

    </div>
  );
};

export default App;
