import "./dashboard.css";
import logo from "../../../assets/logo.png";
import LogoutButton from "../../commonComponents/logoutButton/logoutButton.jsx";

export default function Dashboard() {
  return (
    <>
    
      <header className="headerProfile">
        <div className="containerImageLogo">
          <img src={logo} className="imagelogo" alt="The Missing Piece" />
        </div>
        <div className="containerButtons">
            <button>My Profile</button>
            <button>My Request by Me</button>
            <button>My Puzzles</button>
            <button>Browse New Puzzles</button>
          <LogoutButton />
        </div>
      </header>
      <h1>"Hello Profile"</h1>
      <footer>
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
      
    </>
  );
}
