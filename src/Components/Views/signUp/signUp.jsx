import "./signUp.css";
import { Link } from "react-router-dom";
import background_pieces from "../../../assets/background_pieces.png";
import Logo from "../../commonComponents/logo/logo.jsx";

export default function SignUp() {
  return (
    <>
      <div className="topDiv">
        <div className="left">
          <header className="headerIndex">
            <Logo />
          </header>

          <div className="mainSignup">
            <h1> Join the Puzzle Community </h1>
            <input className="fullNameInput" placeholder="Full name"></input>
            <input className="ZipCodeInput" placeholder="Zip Code"></input>
            <input className="emailInput" placeholder="e-mail"></input>
            <input className="phoneInput" placeholder="Phone"></input>
            <input className="passwordInput" placeholder="Password"></input>
            <Link to="/dashboard">
              <button className="signUpButtonBlack">Sign Up</button>
            </Link>
          </div>
          <p className="Log-In-Here">Already have an account? 
          <br></br>Log In Here</p>
        </div>
        <div className="rightSignup">
          <div className="div-second-seach-puzzle-button">
          <Link to="/index">
            <button className="second-seach-puzzle-button">
              Search for puzzles
            </button>
          </Link>
          </div>
          <img
            src={background_pieces}
            className="imagenSignup"
            alt="The Missing Piece"
          />
        </div>
      </div>
      <footer>
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
    </>
  );
}
