import "./puzzleShowPage.css";
import HeaderLogout from "../../../Components/commonComponents/headerLogout/headerLogout.jsx";
import puzzle_1 from "../../../assets/puzzle_1.jpg";
import zipIcon from "../../../assets/zip_icon.png";
import piece_icon from "../../../assets/piece_icon.png";

export default function PuzzleShowPage() {

  return (
    <>
      <div className='app-container-show-page'>
        <header className="header-show-page">
          <HeaderLogout />
        </header>

        <div className="all-image-Borrow-Puzzle">
          <div className="left-image-Borrow-Puzzle">
            <div className="title-image-Borrow-Puzzle">
              <h2 className='puzzle-title-show-page'> Enchanted Landscapes</h2>
            </div>

            <img
              src={puzzle_1}
              className="puzzle-image-Borrow-Puzzle"
              alt="The Missing Piece"
            />
          </div>
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
            <p>The puzzle is in good condition.</p>
          </div>
        </div>

        <footer className="foo-ter">
          <h4>© 2023 The Missing Piece Team</h4>
        </footer>
      </div>
    </>
  );
}
