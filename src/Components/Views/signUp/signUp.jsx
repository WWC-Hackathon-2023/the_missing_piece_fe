import "./signUp.css";
import { Link } from 'react-router-dom';
import background_pieces from "../../../assets/background_pieces.png";
import HeaderLogout from"../../commonComponents/headerLogout/headerLogout.jsx";


export default function SignUp() {


  return (
    <>
    <header className="headerIndex">
        < HeaderLogout />
        
      </header>
      <div className="topDiv">
      
        <div className="left">
       
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
        </div>
        <div className="rightSignup">
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
