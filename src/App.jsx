import React from 'react';
import './App.css';
import Dashboard from './Dashboard';


const App = () => {
  return (
    <div className="app" style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff'
    }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Marketing Dashboard</h1>
      <Dashboard />

    </div>
  );
};

export default App;
