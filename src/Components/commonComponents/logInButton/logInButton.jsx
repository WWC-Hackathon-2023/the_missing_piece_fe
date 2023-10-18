import React from 'react';
import "./loginButton.css";
import { Link, useLocation } from 'react-router-dom';


export default function LogInButton() {
  const location = useLocation();
  const getTargetURL = () => {
    if (location.pathname === '/login') {
      
      return '/dashboard';
    } else {
     
      return '/login';
    }
  };

  return (
    <Link to={getTargetURL()}>
    <button className="login-button">Log In</button>
  </Link>
  );
};



   