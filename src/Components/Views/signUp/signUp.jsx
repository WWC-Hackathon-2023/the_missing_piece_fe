import "./signUp.css";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.jsx";
import background_pieces from "../../../assets/background_pieces.png";
import logo from "../../../assets/logo.png";

export default function SignUp() {

  
  return (
    <>
      <div className="topDiv">
        <div className="left">
          <header className="signUpHeader">
            <img src={logo} className="imagelogo" alt="The Missing Piece" />
          </header>
          <div className="mainSignup">
            <h1> Join the Puzzle Community </h1>
            <input className="fullNameInput" placeholder="Full name"></input>
            <input className="ZipCodeInput" placeholder="Zip Code"></input>
            <input className="emailInput" placeholder="e-mail"></input>
            <input className="phoneInput" placeholder="Phone"></input>
            <input className="passwordInput" placeholder="Password"></input>

            <SignUpButton />
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
