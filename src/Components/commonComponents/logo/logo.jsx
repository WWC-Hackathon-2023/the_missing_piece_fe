import React from 'react';
import "./logo.css";
import logo from "../../../assets/logo.png";

import { Link } from 'react-router-dom';

export default function Logo() {


  return (
    <>

      <div className='main-Logo'>
        <Link to="/">
          <img src={logo} className="image-logo" alt="The Missing Piece" />
        </Link>
      </div>

    </>
  );
}