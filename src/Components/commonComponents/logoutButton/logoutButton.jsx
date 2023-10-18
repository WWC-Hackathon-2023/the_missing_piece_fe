import React from 'react';
import "./logoutButton.css";
import { Link} from 'react-router-dom';

export default function LogoutButton() {
  return (
    <Link to="/">
    <button className="logout-button">Log Out</button>
    </Link>
  );
}
