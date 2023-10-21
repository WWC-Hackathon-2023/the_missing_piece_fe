import "./puzzleShowPage.css";
import HeaderLogout from "../../../Components/commonComponents/headerLogout/headerLogout.jsx";
import puzzle_1 from "../../../assets/puzzle_1.jpg";
import zipIcon from "../../../assets/zip_icon.png";
import piece_icon from "../../../assets/piece_icon.png";

export default function PuzzleShowPage() {
  return (
    <>
      <header className="header-show-page">
        <HeaderLogout />
      </header>

      <div className="all-image-Borrow-Puzzle">
        <div className="left-image-Borrow-Puzzle">
          {/* AQUI VA LA LOGICA PARA RENDERIZAR EL PUZZLE SEGUN CORRESPONDA */}
          <div className="title-image-Borrow-Puzzle">
            <h2> PUZZLE NAME: Enchanted Landscapes</h2>
          </div>

          <img
            src={puzzle_1}
            className="puzzle--image-Borrow-Puzzle"
            alt="The Missing Piece"
          />
        </div>

        <div className="right-Puzzle-Show-Page">
          <p className="message-Puzzle-Show-Page">
            Log in to view this puzzle's status.
          </p>
          <div className="puzzleDescription">
            <h3>Description</h3>
            <p>
              Explore captivating scenes of magical landscapes filled with
              wonder and imagination.
            </p>
            {/* Aquí sería con interpolación {description} */}
          </div>

          <div className="pieces-total-countainer">
            <div className="piece-icode-img-container">
              <img className="icons-profile" src={piece_icon} alt="Zip Icon" />
            </div>
            <div className="piece-icode-qt-container">
              <h3>Pieces total count</h3>
              <p>130</p>
            </div>
          </div>

          <div className="zip-code-container">
            <div className="zip-code-img-container">
              <img className="icons-profile" src={zipIcon} alt="Zip Icon" />
            </div>
            <div className="zip-code-num-container">
              <h3>Zip Code</h3>
              <p>7100000</p>
            </div>
          </div>
          <div className="note-puzzle-inf">
            <h3>Notes</h3>
          </div>
          <p>The puzzle is in good condition.</p>
        </div>
      </div>
      <footer className="foo-ter">
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
    </>
  );
}
