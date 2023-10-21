import "./login.css";
import LogInButton from "../../commonComponents/logInButton/logInButton.jsx";
import background_social from "../../../assets/background_social.png";
import Logo from "../../commonComponents/logo/logo.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="topDiv">
        <div className="left">
          <header className="headerIndex">
            <Logo />
          </header>
          <div className="mainLogin">
            <div className="leftLogin">
              <h1> Welcome to the Puzzle Community! </h1>
              <input className="emailInputLogin" placeholder="e-mail"></input>
              <input
                className="passwordInputLogin"
                type="password"
                placeholder="password"
              ></input>
              <LogInButton />
            </div>
          </div>
        </div>
        <div className="rightLogin">
  <div className="div-second-seach-puzzle-button">
    <Link to="/index">
      <button className="second-seach-puzzle-button">
        Search for puzzles
      </button>
    </Link>
  </div>
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
