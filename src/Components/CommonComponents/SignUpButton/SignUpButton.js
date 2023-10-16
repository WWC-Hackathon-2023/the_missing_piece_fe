import React from 'react';
import "./signUpButton.css";
import { Link } from 'react-router-dom';

export default function SignUpButton() {
  return (
    <Link to="/signUp">
    <button className="signup-button">Sign Up</button>
    </Link>
  );
}

