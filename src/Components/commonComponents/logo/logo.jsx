import React from 'react';
import "./logo.css";
import logo from "../../../assets/logo.png";

import { Link } from 'react-router-dom';

export default function Logo () {
 

  return (
    <>
      <Link to="/">
    <div className='main-Logo'>
    <img src={logo} className="image-logo" alt="The Missing Piece" />
    </div>
    </Link>
    </>
  );
}