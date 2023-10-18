import "./puzzleShowPage.css";
import LogInButton from "../../commonComponents/logInButton/logInButton.jsx";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.jsx";
import logo from "../../../assets/logo.png";
import puzzle_1 from "../../../assets/puzzle_1.jpg";

export default function PuzzleShowPage() {
  return (
    <>
      <header className="headerIndex">
        <div className="containerImageLogo">
          <img src={logo} className="imagelogo" alt="The Missing Piece" />
        </div>
        <div className="containerButtons">
          <SignUpButton />
          <LogInButton />
        </div>
      </header>

      <div className="all">
        <div className="leftPuzzleShowPage">
          {/* AQUI VA LA LOGICA PARA RENDERIZAR EL PUZZLE SEGUN CORRESPONDA */}
          <h2> PUZZLE NAME: Enchanted Landscapes</h2>
          <img src={puzzle_1} className="puzzle" alt="The Missing Piece" />
        </div>

        <div className="rightPuzzleShowPage">
          <div className="puzzleDescription">Puzzle description</div>
          <div className="puzzleDescription">Pieces total count</div>
          <div className="puzzleDescription">ZIP Code</div>
          <div className="puzzleDescription">
            The puzzle is in good condition.
          </div>
          <div className="puzzleDescription">
            "Log in to view this puzzle's status"
          </div>
        </div>
      </div>
      <footer>
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
    </>
  );
}