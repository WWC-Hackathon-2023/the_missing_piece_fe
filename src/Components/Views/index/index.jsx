import "./index.css";
import piece_icon from "../../../assets/piece_icon.png";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import React, { useState, useEffect } from "react";
import { getPuzzlesByZipCode } from "../../../Services/UserServices";
import HeaderLogout from "../../../Components/commonComponents/headerLogout/headerLogout.jsx";
import Navigationbar from "../../../Components/commonComponents/navigationBar/navigationBar.jsx";

export default function Index() {

  const [puzzles, setPuzzles] = useState([]);
  const [visiblePuzzles, setVisiblePuzzles] = useState(4);
  const [expanded, setExpanded] = useState(false);
  const [zipCode, setZipCode] = useState("");

const userIDTrue = localStorage.getItem("userId")!== undefined;

  const handleSearch = async () => {
    const zipCodeInput = document.querySelector(".searchZipCodeInput").value;
    setZipCode(zipCodeInput);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPuzzlesByZipCode(zipCode);
        const data = await response;
        console.log(data.data);
        setPuzzles(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (zipCode) {
      fetchData();
    }
  }, [zipCode]);

  useEffect(() => {
    console.log(puzzles); // Ver el valor actualizado de puzzles
  }, [puzzles]);

  useEffect(() => {
    // Este useEffect se asegura de que los datos estén listos antes de renderizar
    if (puzzles.length > 0) {
      setExpanded(true);
    }
  }, [puzzles]);

  const handleShowMore = () => {
    setVisiblePuzzles((prevVisiblePuzzles) => prevVisiblePuzzles + 4);
  };

  return (
    <>
      <div className='app-container'>
        <header className="header-show-page">
        {userIDTrue? <HeaderLogout /> : <Navigationbar />}
        </header>
        <div className="all-index">
          <div className="search-index-bar">
            <h2 className="title-index">Explore Puzzles by Zip Code</h2>
            <div className="search-container">
              <input 
              className="searchZipCodeInput" 
              placeholder=""
              maxLength={5}
               />
              <button className="search-button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>

          <h3 className="link-search-zip-code">
            <a
              className="link-search-zip-code"
              href="https://worldpostalcode.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find your Zip Code
            </a>

          </h3>

          {puzzles.length > 0 ? (
            <div className="collection-container">
              {puzzles.slice(0, visiblePuzzles).map((puzzle) => (
                <div className="containerInfPuzzle" key={puzzle.id}>
                  <Link className="link-puzzle-Show-Page" to="/puzzleShowPage">
                    <div className="image-puzzle-zip-code">
                      <img
                        src={puzzle.attributes.puzzle_image_url}
                        alt={puzzle.attributes.title}
                        className="puzzle"
                      />
                    </div>
                    <h2 className="title-puzze-inf-puzzle">
                      {puzzle.attributes.title}
                    </h2>
                    <h2 className="description-puzze-inf-puzzle">
                      {puzzle.attributes.description}
                    </h2>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="piece-icon-box">
              <div className="container-piece-icon">
                <img src={piece_icon} className="piece-icon" alt="Puzzle Piece" />
              </div>
              <h2 className="display-available-puzzles">
                Please enter a ZIP code to display all available puzzles.
              </h2>
            </div>
          )}
          {visiblePuzzles < puzzles.length && (
            <div className="showMoreindex">
              <p className="message-show-boton">
                Continue exploring amazing puzzles
              </p>
              <button className="showMoreButton" onClick={handleShowMore}>
                {expanded ? "Show More" : "Show More"}
              </button>
            </div>
          )}
        </div>
        <footer className="foo-ter">
          <h4>© 2023 The Missing Piece Team</h4>
        </footer>
      </div>
    </>
  );
}
