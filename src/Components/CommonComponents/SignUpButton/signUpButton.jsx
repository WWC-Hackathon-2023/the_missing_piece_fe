import React from 'react';
import "./signUpButton.css";
import { Link, useLocation } from 'react-router-dom';

export default function SignUpButton() {
  const location = useLocation();
  const getTargetURL = () => {
    if (location.pathname === '/signUp') {
      
      return '/dashboard';
    } else {
     
      return '/signUp';
    }
  };
  return (
    <Link to={getTargetURL()}>
    <button className="signup-button">Sign Up</button>
    </Link>
  );
}


