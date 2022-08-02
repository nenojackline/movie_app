import React from 'react'

export default function Movies({movies}) {
  return (
    <div className='movies'>
        <h2>Find your movies...</h2>
        <Category title="Latest" movies={movies} />
        <Category title="Action & Thriller" movies={movies} />
        
    </div>
  )
}


const Category = ({title, movies}) => {

    return (
        <div className='category'>
            <h2>{title}</h2>
            <div className='movie-list'>
                {
                    movies.map(movie => <Movie key={movie.id} title={movie.title} url={movie.url} />)
                }
            </div>
        </div>
    )
}
const Movie = ({title, url}) => {

    return (
        <div className='movie'>
            <img src={url} />
            <span>{title}</span>
        </div>
    )
}
