import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {

  return (
    <>
      <Link to="/">
        <button>Dashboard</button>
      </Link>
      <Link to="/myCollection">
        <button>My Collection</button>
      </Link>
      <Link to="/searchForPuzzles">
        <button>Search for Puzzles</button>
      </Link>
    </>
  )


}