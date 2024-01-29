// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes, Route as RouteElement } from 'react-router-dom';
import LoginButtons from './Components/LoginButtons';
import AuthForms from './Components/AuthForms';
import DashBoard from './Components/DashBoard';

const App = () => {
  return (
    <Router>
      <Routes>
        <RouteElement path="/" element={<LoginButtons />} />
        <RouteElement path="/auth/:type" element={<AuthForms />} />
        <RouteElement path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
