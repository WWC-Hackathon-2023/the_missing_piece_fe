import React from 'react';
import './navigationBar.css';
import { Link } from 'react-router-dom';

export default function NavigationBar() {

  return (
    <>
      <nav className='nav-list'>
        <ul>
          <li>
            {/* Usa el componente Link de react-router para enlazar a las rutas */}
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
      </nav>
    </>
  )


}