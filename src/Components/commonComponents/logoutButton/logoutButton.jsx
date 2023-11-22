import React from 'react';
import "./logoutButton.css";
import { Link } from 'react-router-dom';


export default function LogoutButton() {

  const handleLogout = () => {

  localStorage.removeItem('userId');
  }
  return (
    <Link to="/">
      <button className="logout-button" onClick={handleLogout} >Log Out</button>
    </Link>
  );
}
