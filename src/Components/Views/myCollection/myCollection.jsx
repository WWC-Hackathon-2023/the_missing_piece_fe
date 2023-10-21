import React, { useState, useEffect } from 'react';
import "./myCollection.css";
import { getPuzzles } from '../../../Services/UserServices';

export default function MyCollection() {

  
  const [puzzles, setPuzzles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPuzzles(12345);
        const data = await response;
        console.log(data);
        setPuzzles(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Listado de Puzzles</h1>
      <ul>
        {puzzles.map((puzzle) => (
          <li key={puzzle.id}>
            <h2>{puzzle.attributes.title}</h2>
            <p>{puzzle.attributes.description}</p>
            <img src={puzzle.attributes.puzzle_image_url} alt={puzzle.attributes.title} />
          </li>
        ))}
      </ul>
    </>
  );
}