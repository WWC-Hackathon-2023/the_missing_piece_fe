import "./index.css";
import NavigationBar from "../../commonComponents/navigationBar/navigationBar.jsx";
import piece_icon from "../../../assets/piece_icon.png";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import React, { useState, useEffect } from "react";
import { getZpPuzzles } from '../../../Services/UserServices';

export default function Index() {
  const [puzzles, setPuzzles] = useState([]);
  const [visiblePuzzles, setVisiblePuzzles] = useState(4);
  const [expanded, setExpanded] = useState(false);
  const [zipCode, setZipCode] = useState(""); 

  const handleSearch = async () => {
    const zipCodeInput = document.querySelector('.searchZipCodeInput').value;
    setZipCode(zipCodeInput);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getZpPuzzles(zipCode);
        const data = await response;
        console.log(data);
        setPuzzles(data);
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
      <header>
        <NavigationBar />
      </header>
      <div className="all-index">
        <div className="search-index-bar">
          <h2 className="title-index">Explore Puzzles by Zip Code</h2>
          <div className="search-container">
            <input className="searchZipCodeInput" placeholder="" />

            <button className="search-button" onClick={handleSearch}>Search</button>
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

       {puzzles.length > 0 ? ( // Verifica si hay rompecabezas para mostrar
  <div className="containerInfPuzzle">
    {puzzles.map((puzzle) => (
      <Link className="link-puzzle-Show-Page" to="/puzzleShowPage" key={puzzle.id}>
        <div className="image-puzzle-zip-code">
          <img src={puzzle.puzzle_image_url} alt={puzzle.title} className="puzzle" />
        </div>
        <h2 className="title-puzze-inf-puzzle">{puzzle.title}</h2>
        <h2 className="description-puzze-inf-puzzle">{puzzle.attributes.description}</h2>
      </Link>
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



// import "./index.css";
// import NavigationBar from "../../commonComponents/navigationBar/navigationBar.jsx";
// import { Link } from "react-router-dom";
// import "font-awesome/css/font-awesome.css";
// import React, { useState } from "react";
// import { getZpPuzzles } from "../../../Services/UserServices";

// export default function Index() {
//   const [puzzles, setPuzzles] = useState([]);
//   const [visiblePuzzles, setVisiblePuzzles] = useState(4);
//   const [expanded, setExpanded] = useState(false);
//   const [zipCode, setZipCode] = useState("");

//   const handleZipCodeChange = (event) => {
//     setZipCode(event.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await getZpPuzzles(zipCode); 

//       console.log(zipCode);
//       const data = await response;
//       if (data.success) {
//         setPuzzles(data.data);
//         console.log(data);
//       } else {
//         setPuzzles([]); // No se encontraron rompecabezas para el código postal
//       }
//     } catch (error) {
//       console.error(error);
//       setPuzzles([]); // Error en la solicitud, establece el estado a una matriz vacía
//     }
//   };

//   const handleShowMore = () => {
//     setExpanded(true);
//     setVisiblePuzzles((prevVisiblePuzzles) => prevVisiblePuzzles + 4);
//   };

//   return (
//     <>
//       <header>
//         <NavigationBar />
//       </header>
//       <div className="all-index">
//         <div className="search-index-bar">
//           <h2 className="title-index">Explore Puzzles by Zip Code</h2>
//           <div className="search-container">
//             <input
//               className="searchZipCodeInput"
//               placeholder="Enter Zip Code"
//               value={zipCode}
//               onChange={(event) => setZipCode(event.target.value)} 
//             />
//              <button className="search-button" onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="title-show-puzzles-box">
//           <h2 className="Puzzles-zip-code">Puzzles in Your Zip Code</h2>
//         </div>

//         <Link className="link-puzzle-Show-Page" to="/puzzleShowPage">
//           <div className="containerInfPuzzle">
//             {puzzles.slice(0, visiblePuzzles).map((puzzle) => (
//               <div className="containerImagePuzzles" key={puzzle.id}>
//                 <img
//                   src={puzzle.imageUrl}
//                   className="puzzle"
//                   alt={puzzle.name}
//                 />
//               </div>
//             ))}
//           </div>
//         </Link>

//         {visiblePuzzles < puzzles.length && (
//           <div className="showMoreindex">
//             <p className="message-show-boton">
//               Continue exploring amazing puzzles
//             </p>
//             <button className="showMoreButton" onClick={handleShowMore}>
//               {expanded ? "Show Less" : "Show More"}
//             </button>
//           </div>
//         )}
//       </div>
//       <footer className="foo-ter">
//         <h4>© 2023 The Missing Piece Team</h4>
//       </footer>
//     </>
//   );
// }



// import "./index.css";
// import NavigationBar from "../../commonComponents/navigationBar/navigationBar.jsx";
// import piece_icon from "../../../assets/piece_icon.png";
// import { Link } from "react-router-dom";
// import "font-awesome/css/font-awesome.css";
// import React, { useState } from "react";
// import { getZpPuzzles } from "../../../Services/UserServices";

// export default function Index() {
//   const [puzzles, setPuzzles] = useState([]);
//   const [visiblePuzzles, setVisiblePuzzles] = useState(4);
//   const [expanded, setExpanded] = useState(false);
//   const [zipCode, setZipCode] = useState("");

//   const handleZipCodeChange = (event) => {
//     setZipCode(event.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await getZpPuzzles(zipCode);
//       const data = await response;
//       setPuzzles(data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleShowMore = () => {
//     setExpanded(true);
//     setVisiblePuzzles((prevVisiblePuzzles) => prevVisiblePuzzles + 4);
//   };

//   return (
//     <>
//       <header>
//         <NavigationBar />
//       </header>
//       <div className="all-index">
//         <div className="search-index-bar">
//           <h2 className="title-index">Explore Puzzles by Zip Code</h2>
//           <div className="search-container">
//             <input
//               className="searchZipCodeInput"
//               placeholder="Enter Zip Code"
//               value={zipCode}
//               onChange={handleZipCodeChange} // Agregar el evento onChange
//             />

//             <button className="search-button" onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="title-show-puzzles-box">
//           <h2 className="Puzzles-zip-code">Puzzles in Your Zip Code</h2>
//         </div>

//         <Link className="link-puzzle-Show-Page" to="/puzzleShowPage">
//           <div className="containerInfPuzzle">
//             {puzzles.slice(0, visiblePuzzles).map((puzzle) => (
//               <div className="containerImagePuzzles" key={puzzle.id}>
//                 <img
//                   src={puzzle.imageUrl}
//                   className="puzzle"
//                   alt={puzzle.name}
//                 />
//               </div>
//             ))}
//           </div>
//         </Link>

//         {visiblePuzzles < puzzles.length && (
//           <div className="showMoreindex">
//             <p className="message-show-boton">
//               Continue exploring amazing puzzles
//             </p>
//             <button className="showMoreButton" onClick={handleShowMore}>
//               {expanded ? "Show Less" : "Show More"}
//             </button>
//           </div>
//         )}
//       </div>
//       <footer className="foo-ter">
//         <h4>© 2023 The Missing Piece Team</h4>
//       </footer>
//     </>
//   );
// }
