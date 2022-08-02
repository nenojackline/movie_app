import React from 'react'

export default function ({movies}) {



  return (
    <div className="home">
        <DisplayMovie />
        <div className='lists'>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie} />)
            }
        </div>


    </div>
  )
}


const DisplayMovie = ({ selectedMovie }) => {

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


// movie 
const Movie = ({movie}) => {

    const {url, title} = movie;

    return (
        <div className='movie'>
            <img src={url} />
            <span>{title}</span>
        </div>
    )
}
