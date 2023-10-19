import "./index.css";
import LogInButton from "../../commonComponents/logInButton/logInButton.jsx";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.jsx";
import Logo from "../../commonComponents/logo/logo.jsx";
import puzzle_1 from "../../../assets/puzzle_1.jpg";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";

export default function Index() {
  return (
    <>
      <header className="headerIndex">
        <div className="containerImageLogo">
        <Logo />
        </div>
        <div className="containerButtons">
          <SignUpButton />
          <LogInButton />
        </div>
      </header>
      <div className="all">
      
      <h2>Puzzles in Your Zip Code</h2>

      <div className="search-container">
        <input className="searchZipCodeInput" placeholder="" />
        <i className="fa fa-search"></i>
        
      </div>
      <h3>Find Your ZIP Code</h3>
      <h2>Explore Puzzles by Zip Code</h2>
      <Link to="/puzzleShowPage">
        <div className="containerInfPuzzle">
 {/* AQUI VA LA LOGICA PARA RENDERIZAR TODOS LOS PUZZLE SEGUN EL ZiPCODE */}

          <div className="containerImagePuzzles">
            <img src={puzzle_1} className="puzzle" alt="The Missing Piece" />
          </div>

          <div className="puzzleName">Puzzle name</div>
          <div className="puzzleDescription">Puzzle description</div>
        </div>
      </Link>
     
      <div className="showMoreindex">
      <p>Continue exploring amazing puzzles</p>
      <button className="showMoreButton"> Show more</button>
      </div>
      </div>
      <footer>
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
    </>
  );
}
