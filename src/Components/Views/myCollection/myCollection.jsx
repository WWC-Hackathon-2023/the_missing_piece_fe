import React, { useState, useEffect } from 'react';
import "./myCollection.css";
import { getPuzzles } from '../../../Services/UserServices';
import NavigationBar from "../../commonComponents/navigationBar/navigationBar";

export default function MyCollection() {


  const [puzzles, setPuzzles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPuzzles(12345);
        const data = await response;
        console.log(data);
        setPuzzles(data.data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="app-container">
        <header className="headerProfile">
          <NavigationBar />
        </header>
        <h2 className='title-my-collection'>My Collection</h2>
        <div className="puzzle-grid">
          {puzzles.map((puzzle) => (
            <div key={puzzle.id} className="puzzle-item">
              <img className="image-collection" src={puzzle.attributes.puzzle_image_url} alt={puzzle.attributes.title} />
              <button className="update-puzzle-btn">Update Puzzle</button>
              <h2 className='puzzle-title-collection'>{puzzle.attributes.title}</h2>
              <div className="status">
                <h4>Status: </h4>&nbsp;<span className='status-message'>{puzzle.attributes.status}</span>
              </div>
              <p>{puzzle.attributes.description.split(' ').slice(0, 30).join(' ')}...</p>
            </div>
          ))}
        </div>
        <footer className="foo-ter">
          <h4>© 2023 The Missing Piece Team</h4>
        </footer>
      </div>
    </>
  );
};