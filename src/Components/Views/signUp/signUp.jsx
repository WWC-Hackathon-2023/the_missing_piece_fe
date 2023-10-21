import "./signUp.css";
import { Link } from "react-router-dom";
import Logo from "../../commonComponents/logo/logo.jsx";

export default function SignUp() {
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
            <div className="left-side-signup ">
              <h1 className='title-signup'>Join the Puzzle Community</h1>
              <input className="fullNameInput" placeholder="Full name" />
              <input className="zip-code-input" placeholder="Zip Code" />
              <input className="emailInput" placeholder="e-mail" />
              <input className="phoneInput" placeholder="Phone" />
              <input className="passwordInput" placeholder="Password" />
              <Link to="/dashboard">
                <button className="signUpButtonBlack">Sign Up</button>
              </Link>
              <p className="log-in-message">Already have an account?</p>
              <p className="log-in-here">Log In Here</p>
            </div>

            <div className="right-side-home">
            </div>
          </div>

          <footer className="foo-ter">
            <h4>© 2023 The Missing Piece Team</h4>
          </footer>
        </div>
      </div>
    </>
  );
}
