import React from 'react';
import './navigationBar.css';
import LogoutButton from "../../commonComponents/logoutButton/logoutButton.jsx";
import Logo from "../../commonComponents/logo/logo.jsx";
import { Link } from 'react-router-dom';

export default function NavigationBar() {

  return (
    <>
      <nav className='nav-list'>
        <Logo />
        <ul>
          <li>
            <Link to="/dashboard" className="nav-bar-button">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/myCollection" className="nav-bar-button">
              My Puzzles
            </Link>
          </li>
          <li>
            <Link to="/searchPuzzles" className="nav-bar-button">
              Search for Puzzles
            </Link>
          </li>
        </ul>
        <LogoutButton />
      </nav>
    </>
  )


}