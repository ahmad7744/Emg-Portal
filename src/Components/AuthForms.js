import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthForms = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
   
    navigate('/dashboard');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
  
    navigate('/dashboard');
  };

  const switchToSignup = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm onSubmit={handleLoginSubmit} onSignupClick={switchToSignup} />
      ) : (
        <SignupForm onSubmit={handleSignupSubmit} onLoginClick={switchToLogin} />
      )}
    </div>
  );
};

export default AuthForms;
