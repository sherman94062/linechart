// src/App.js
import React from 'react';
import LineChart from './LineChart';

const App = () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    values: [10, 25, 15, 30, 20],
  };

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <LineChart data={chartData} />
    </div>
  );
};

export default App;
