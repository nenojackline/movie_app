import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className='logo'>
            <Link to='/'><h1>Moovizz</h1></Link>
        </div>
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/add-review">Add Review</Link>
        </div>

        <div className='search'>
            s
        </div>
    </div>
  )
}
