import React from 'react';
import "./headerLogout.css";
import LogInButton from "../logInButton/logInButton.jsx";
import SignUpButton from "../signUpButton/signUpButton.jsx";
import Logo from '../logo/logo';

export default function HeaderLogout () {
         
  return (
    <>
    <div className='headerLogout'>
    <Logo /> 
    <SignUpButton />
    <LogInButton />
    </div>
    </>
  );
}
