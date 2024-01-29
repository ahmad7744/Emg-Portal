// LoginButtons.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButtons = () => {
  const navigate = useNavigate();

  const handleButtonClick = (emergencyType) => {
    navigate(`/auth/${emergencyType}`);
  };

  return (
    <div className='flex flex-col justify-center content-center items-center gap-10 h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Welcome To Emergency Services</h1>
      <p className='text-xl font-medium '>Please Select Your Department</p>
      <div className='flex flex-col justify-center content-center items-center gap-10'>
        <button
          className='bg-blue-300 pb-1 pt-1 pl-12 pr-12 rounded-full text-4xl hover:bg-blue-400 focus:outline-none focus:ring focus:border-blue-300'
          onClick={() => handleButtonClick('police')}
        >
          Police
        </button>
        <button
          className='bg-blue-300 pb-1 pt-1 pl-12 pr-12 rounded-full text-4xl hover:bg-blue-400 focus:outline-none focus:ring focus:border-blue-300'
          onClick={() => handleButtonClick('ambulance')}
        >
          Ambulance
        </button>
        <button
          className='bg-blue-300 pb-1 pt-1 pl-12 pr-12 rounded-full text-4xl hover:bg-blue-400 focus:outline-none focus:ring focus:border-blue-300'
          onClick={() => handleButtonClick('firebrigade')}
        >
          Fire Brigade
        </button>
      </div>
    </div>
  );
};

export default LoginButtons;
