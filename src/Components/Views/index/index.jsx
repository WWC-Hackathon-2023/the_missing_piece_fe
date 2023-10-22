import "./index.css";
import NavigationBar from "../../commonComponents/navigationBar/navigationBar.jsx";
import puzzle_1 from "../../../assets/puzzle_1.jpg";
import piece_icon from "../../../assets/piece_icon.png";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import React, { useState, useEffect } from "react";

// Importa tus componentes y datos necesarios aquí

export default function Index() {
  const [puzzles, setPuzzles] = useState([]);
  const [visiblePuzzles, setVisiblePuzzles] = useState(4);
  const [expanded, setExpanded] = useState(false);

  // Simula una llamada a la API y carga los datos de los rompecabezas
  useEffect(() => {
    // Supongamos que obtienes los datos de los rompecabezas de tu API aquí
    const fetchedPuzzles = [
      {
        id: 1,
        imageUrl: "puzzle_1.jpg",
        name: "Puzzle 1",
        description: "Description 1",
      },
      {
        id: 1,
        imageUrl: "puzzle_1.jpg",
        name: "Puzzle 1",
        description: "Description 1",
      },
      {
        id: 1,
        imageUrl: "puzzle_1.jpg",
        name: "Puzzle 1",
        description: "Description 1",
      },
      {
        id: 1,
        imageUrl: "puzzle_1.jpg",
        name: "Puzzle 1",
        description: "Description 1",
      },
      {
        id: 1,
        imageUrl: "puzzle_1.jpg",
        name: "Puzzle 1",
        description: "Description 1",
      },
      {
        id: 1,
        imageUrl: "puzzle_1.jpg",
        name: "Puzzle 1",
        description: "Description 1",
      },
      {
        id: 1,
        imageUrl: "puzzle_1.jpg",
        name: "Puzzle 1",
        description: "Description 1",
      },
      {
        id: 1,
        imageUrl: "puzzle_1.jpg",
        name: "Puzzle 1",
        description: "Description 1",
      },
      {
        id: 1,
        imageUrl: "puzzle_1.jpg",
        name: "Puzzle 1",
        description: "Description 1",
      },
      {
        id: 1,
        imageUrl: "puzzle_1.jpg",
        name: "Puzzle 1",
        description: "Description 1",
      },

      // Agrega más objetos de rompecabezas según sea necesario
    ];
    setPuzzles(fetchedPuzzles);
  }, []);

  const handleShowMore = () => {
    setExpanded(true);
    setVisiblePuzzles((prevVisiblePuzzles) => prevVisiblePuzzles + 4);
  };

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <div className="all-index">
        <div className="search-index-bar">
          <h2 className="title-index">Explore Puzzles by Zip Code</h2>
          <div className="search-container">
            <input className="searchZipCodeInput" placeholder="" />
            <i className="fa fa-search"></i>
            <button className="search-button">Search</button>
          </div>
        </div>

        <h3 className="link-search-zip-code">
          <Link
            className="link-search-zip-code"
            to="https://worldpostalcode.com"
          >
            Explore Puzzles by Zip Code
          </Link>
        </h3>
        {/* show puzzle piece when have nor zip code jet */}

        <div className="piece-icon-box">
          <div className="container-piece-icon">
            <img src={piece_icon} className="piece-icon" alt="Puzzle Piece" />
          </div>
          <h2 className="display-available-puzzles">
            Please enter a ZIP code to display all available puzzles.
          </h2>
        </div>

        {/* show puzzles by zip code */}

        <div className="title-show-puzzles-box">
          <h2 className="Puzzles-zip-code">Puzzles in Your Zip Code</h2>
        </div>

        <Link className="link-puzzle-Show-Page" to="/puzzleShowPage">
          <div className="containerInfPuzzle">
            <img
              src={puzzle_1}
              className="image-puzzle-zip-code"
              alt="The Missing Piece"
            />
            <h2 className="title-puzze-inf-puzzle"> Enchanted Landscapes</h2>

            <h2 className="description-puzze-inf-puzzle">
              Explore captivating scenes of magical landscapes filled with
              wonder and imagination.
            </h2>

            {puzzles.slice(0, visiblePuzzles).map((puzzle) => (
              <div className="containerImagePuzzles" key={puzzle.id}>
                <img
                  src={puzzle.imageUrl}
                  className="puzzle"
                  alt={puzzle.name}
                />
              </div>
            ))}
          </div>
        </Link>

        {visiblePuzzles < puzzles.length && (
          <div className="showMoreindex">
            <p className="message-show-boton">
              Continue exploring amazing puzzles
            </p>
            <button className="showMoreButton" onClick={handleShowMore}>
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
      <footer className="foo-ter">
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
    </>
  );
}
