import "./signUp.css";
import Logo from "../../commonComponents/logo/logo.jsx";
// import '@passageidentity/passage-elements/passage-register';
import React, { useState } from 'react';
import "./signUp.css";
import { registerUser } from '../../../Services/UserServices';
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';


export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage] = useState('');
  const navigate = useNavigate();
  const [passwordConfirmation, setPasswordConfirmation] = useState(''); // Estado para confirmación de contraseña

  const handleSignUp = async () => {
    if (password !== passwordConfirmation) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords dont match.',
        icon: 'error',
        confirmButtonText: 'Accept',
      });
      return;
    }

    try {
      await registerUser(fullName, email, password, passwordConfirmation, zipCode, phone);
      navigate('/dashboard');
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was a problem to signup.',
        icon: 'error',
        confirmButtonText: 'Aceept',
      });
    }
  };


  return (
    <>
      <div className='app-container'>
        <div className='backgroung-signup'>
          <header className="header-signup">
            <div className="logo-container">
              <Logo />
            </div>
            <Link to="/index">
              <button className="second-seach-puzzle-button">
                Search for puzzles
              </button>
            </Link>
          </header>
          <div className="main-home">
            <div className="left-side-signup">
              <input className="fullNameInput" placeholder="Full name" value={fullName} onChange={e => setFullName(e.target.value)} />
              <input className="zip-code-input" placeholder="Zip Code" value={zipCode} onChange={e => setZipCode(e.target.value)} />
              <input className="emailInput" placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} />
              <input className="phoneInput" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
              <input
                type="password"
                className="passwordInput"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="passwordInput"
                placeholder="Confirm Password"
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
              />
              <button className="signUpButtonBlack" onClick={handleSignUp}>Sign Up</button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <p className="log-in-message">Already have an account?</p>
              <Link to="/login">
                <p className="log-in-here">Log In Here</p>
              </Link>
              {/* <div>
                <passage-register
                  app-id={process.env.REACT_APP_PASSAGE_APP_ID}
                />
              </div> */}
            </div>
            <div className="right-side-home">
            </div>
          </div>
          <footer className="foo-ter">
            <h4>© 2023 The Missing Piece Team</h4>
          </footer>
        </div>
      </div >
    </>
  );
}