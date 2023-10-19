import "./index.css";
import LogInButton from "../../commonComponents/logInButton/logInButton.jsx";
import SignUpButton from "../../commonComponents/signUpButton/signUpButton.jsx";
import Logo from "../../commonComponents/logo/logo.jsx";
import puzzle_1 from "../../../assets/puzzle_1.jpg";
import piece_icon from "../../../assets/piece_icon.png";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import React, { useState, useEffect } from 'react';


// Importa tus componentes y datos necesarios aquí

export default function Index() {
  const [puzzles, setPuzzles] = useState([]);
  const [visiblePuzzles, setVisiblePuzzles] = useState(4);
  const [expanded, setExpanded] = useState(false);

  // Simula una llamada a la API y carga los datos de los rompecabezas
  useEffect(() => {
    // Supongamos que obtienes los datos de los rompecabezas de tu API aquí
    const fetchedPuzzles = [
      { id: 1, imageUrl: 'puzzle_1.jpg', name: 'Puzzle 1', description: 'Description 1' },
      { id: 1, imageUrl: 'puzzle_1.jpg', name: 'Puzzle 1', description: 'Description 1' },
      { id: 1, imageUrl: 'puzzle_1.jpg', name: 'Puzzle 1', description: 'Description 1' },
      { id: 1, imageUrl: 'puzzle_1.jpg', name: 'Puzzle 1', description: 'Description 1' },
      { id: 1, imageUrl: 'puzzle_1.jpg', name: 'Puzzle 1', description: 'Description 1' },
      { id: 1, imageUrl: 'puzzle_1.jpg', name: 'Puzzle 1', description: 'Description 1' },
      { id: 1, imageUrl: 'puzzle_1.jpg', name: 'Puzzle 1', description: 'Description 1' },
      { id: 1, imageUrl: 'puzzle_1.jpg', name: 'Puzzle 1', description: 'Description 1' },
      { id: 1, imageUrl: 'puzzle_1.jpg', name: 'Puzzle 1', description: 'Description 1' },
      { id: 1, imageUrl: 'puzzle_1.jpg', name: 'Puzzle 1', description: 'Description 1' },

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
      <header className="headerIndex">
        <div className="containerImageLogo">
        <Logo />
        </div>
        
      </header>
      <div className="all">
        <h2>Explore Puzzles by Zip Code</h2>
        <div className="search-container">
          <input className="searchZipCodeInput" placeholder="" />
          <i className="fa fa-search"></i>
          <button className="search-button">Search</button>
        </div>
        <h3>
          <Link to="https://worldpostalcode.com">
            Explore Puzzles by Zip Code
          </Link>
        </h3>
        <h2>Puzzles in Your Zip Code</h2>
        <Link to="/puzzleShowPage">
          <div className="container-piece-icon">
            <img src={piece_icon} className="piece-icon" alt="Puzzle Piece" />
          </div>
          <h2>Please enter a ZIP code to display all available puzzles.</h2>
          <div className="containerInfPuzzle">
            {puzzles.slice(0, visiblePuzzles).map((puzzle) => (
              <div className="containerImagePuzzles" key={puzzle.id}>
                <img src={puzzle.imageUrl} className="puzzle" alt={puzzle.name} />
              </div>
            ))}
          </div>
         
        </Link>
        {visiblePuzzles < puzzles.length && (
            <div className="showMoreindex">
              <p>Continue exploring amazing puzzles</p>
              <button className="showMoreButton" onClick={handleShowMore}>
                {expanded ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
      </div>
      <footer>
        <h4>© 2023 The Missing Piece Team</h4>
      </footer>
    </>
  );
}
