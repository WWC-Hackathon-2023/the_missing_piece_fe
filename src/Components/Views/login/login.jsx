import "./login.css";
import Logo from "../../commonComponents/logo/logo.jsx";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <>
      <div className='app-container'>
        <div className='backgroung-login'>
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

          <div className="main-login">
            <div className="left-side-signup ">
              <h1 className='title-login'>Welcome to the Puzzle Community!</h1>
              <input className="emailInput" placeholder="e-mail" />
              <input className="passwordInput" placeholder="Password" />
              <Link to="/dashboard">
                <button className="signUpButtonBlack">Log In</button>
              </Link>
              <p className="log-in-message">Don't you have an account yet?</p>
              <p className="log-in-here">Sign up</p>
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
