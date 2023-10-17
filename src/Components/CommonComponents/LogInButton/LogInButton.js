import React from 'react';
import "./loginButton.css";
import { Link } from 'react-router-dom';


export default function LogInButton() {
  return (
    <Link to="/login">
    <button className="login-button">Log In</button>
    </Link>
  );
};


  
   