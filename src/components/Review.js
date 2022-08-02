import React from 'react'
import {useState} from 'react'

export default function Review({movies}) {

    let selected = movies[0];
    const [selectedMovie, setSelectedMovie] = useState("")
    console.log( selectedMovie)


    const handleClick = (e) => {
        e.preventDefault();
        console.log("Item clicked")
    }


  return (
    <div className="review">
        <div className="sideA">
            <DisplayMovie selectedMovie={selectedMovie}/>

        </div>

        <div className="sideB">
            <h2>Review List</h2>
            <div className="review-list">
                {
                      movies.map(movie => <MovieList key={movie.id} movie={movie} handleClick = {handleClick}/>)
                }
            </div>

        </div>

    </div>
  )
}

const DisplayMovie = ({selectedMovie}) => {

    //const {title, type, rating, genres, plot, url} = selectedMovie;

    return (
        <>
            <img src={require("../images/image3.jpg")} alt="image1" />
            <div className="overlay"></div>
            <div className="details">
                <h1>The Witcher</h1>
                <span>Season 1</span>
                <div className="rating">
                    <span>Rating- {8.5}</span>
                </div>
                <div className='genres'>
                    <span>Action</span>
                    <span>Adventure</span>
                </div>
                <p>The Witcher is a series of video games developed and published by CD Projekt RED and later converted into a film series by Polish studio Obsidian Entertainment. The series is based on the graphic novel The Witcher: Wild Hunt, and was released in multiple regions worldwide on October 24, 2017, and concluded with the film The Witcher: The Game of the Year 2017 on January 31, 2018.</p>
            </div>
        </>
    )
}

//review List
const MovieList = ({movie, handleClick}) => {

    const { title, url, rating, genres, year } = movie;

    return (
        <div className='movie' onClick={handleClick}>
            <img src={url} />
            <div className="details">
                <h3>{title}</h3>
                <span>Rating- {rating}</span>
                <span>{genres}</span>
                <span>{year}</span>
            </div>
        </div>
    )
}