import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <Navbar />

      <div className="flex-1 p-8">

        <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard!</h2>

      </div>
    </div>
  );
};

export default Dashboard;
