import "./imageBorrowPuzzle.css";
import puzzle_1 from "../../../assets/puzzle_1.jpg";
import NavigationBar from "../../commonComponents/navigationBar/navigationBar.jsx";
import { Link } from "react-router-dom";
import zipIcon from "../../../assets/zip_icon.png";
import piece_icon from "../../../assets/piece_icon.png";

export default function ImageBorrowPuzzle() {
  return (
    <>
      <div className='app-container'>
        <div className='puzzle-show-page-container'>
          <header className="headerProfile">
            <div className="containerImageLogo">
              <NavigationBar />
            </div>
          </header>
          <div className="title-imageBorrowPuzzle">
            <h2> Puzzle Information </h2>
          </div>
          <div className="main-image-borrow-puzzle">
            <div className="left-main-image-borrow-puzzle">
              <lable className="title-puzle-name"> Puzzle Information </lable>
              <div className="content-img-puzzle-pcture">
                <img
                  src={puzzle_1}
                  className="puzzle-img"
                  alt="The Missing Piece"
                />
              </div>
              <div className="message">
                <p>
                  You've requested to borrow this puzzle! Please wait for the owner
                  to accept your request. Once accepted, you'll find the owner's
                  information in the 'Requested by Me' tab. Thanks for your request!
                </p>
              </div>
            </div>

            <div className="right-image-borrow-puzzle">
              <div className="owner-title">
                <h3>Owner</h3>
                <p>Andrea Ramirez</p>
                {/* Aquí sería con interpolación {user.name} */}
              </div>

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
              <div className="status-puzzle-inf"> Status</div>
              <div className="container-status-puzzle">
                <p className="status-puzzle">estatus</p>
              </div>
              <Link to="/index">
                <button className="return-dashboard-button">
                  Return to dashboard
                </button>
              </Link>
            </div>
          </div>
          <div className="foo-ter">
            <h4>© 2023 The Missing Piece Team</h4>
          </div>
        </div>
      </div>
    </>
  );
}
