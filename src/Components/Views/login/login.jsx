import "./login.css";
import LogInButton from "../../commonComponents/logInButton/logInButton.jsx";
import background_social from "../../../assets/background_social.png";
import logo from "../../../assets/logo.png";

export default function Login() {
  return (
    <>
      <div className="topDiv">
        <div className="left">
          <header>
            <img src={logo} className="imagelogo" alt="The Missing Piece" />
          </header>
          <div className="mainLogin">
            <div className="leftLogin">
              <h1> Welcome to the Puzzle Community! </h1>
              <input className="emailInputLogin" placeholder="e-mail"></input>
              <input className="passwordInputLogin" placeholder="password"></input>
              <LogInButton />
            </div>
          </div>
        </div>
        <div className="rightLogin">
          <img
            src={background_social}
            className="imagenlogin"
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
