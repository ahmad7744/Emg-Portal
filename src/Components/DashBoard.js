import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-200">
     
      <div className="bg-blue-500 w-64 p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Profile</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Settings</a>
            </li>
            
          </ul>
        </nav>
      </div>

      
      <div className="flex-1 p-8">
        
        <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard!</h2>
       
      </div>
    </div>
  );
};

export default Dashboard;
