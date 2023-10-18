import React from 'react';
import "./logo.css";
import logo from "../../../assets/logo.png";

import { Link } from 'react-router-dom';

export default function Logo () {
 

  return (
    <>
      <Link to="/">
    <div className='mainLogo'>
    <img src={logo} className="imagelogo" alt="The Missing Piece" />
    </div>
    </Link>
    </>
  );
}