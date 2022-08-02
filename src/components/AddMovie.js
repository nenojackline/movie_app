import React from 'react'
import { useState } from 'react'

const movieApi = 'http://localhost:8000/movies'

    const AddMovie = () =>{
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [genres, setGenres] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState('');
  const [url, setUrl] = useState('');
  const [plot, setPlot] = useState('');

  //console.log(genres.split(" "));
  const checkValidInputs = (title, type, genres, rating, year, url, plot) => {
    //ensure no empty values submited to the db
    if (title !== "" && type !== "" && genres !== "" && rating !== "" && year !== "" && url !== "" && plot !== ""){
      console.log("All inputs available")
      return true;
    }
  }
  //submit handler for created movies
  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = {
      title: title,
      type: type,
      genres: genres.split(" "),
      rating: rating,
      year: year,
      url: url,
      plot: plot
    }

    //validate inputs
    const isValid = checkValidInputs(title, type, genres, rating, year, url, plot);

    if (!isValid) {
      console.log("Ensure all inputs are filled");
      return;
    }

    fetch(movieApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

    //clear inputs after submiting
    setTitle("");
    setType("");
    setGenres("")
    setRating("");
    setYear(" ");
    setUrl("");
    setPlot(" ")
  }



  return (
    <div className="new-movie">
        <div className='sideA'>
            <img src={require("../images/image1.jpg")} alt="image1"/>
            <div className="overlay"></div>
        </div>

        <div className="sideB">
            <h3>Create a new movie</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Type</label>
                <input type="text" placeholder="Movie or Series" value={type} onChange={(e) => setType(e.target.value)} />
                <label>Genre</label>
                <input type="text" placeholder="Genre i.e use space to seperate" value={genres} onChange={(e) => setGenres(e.target.value)} />
                <label>Rating</label>
                <input type="text" placeholder="Rating i.e 8.5" value={rating} onChange={(e) => setRating(e.target.value)} />
                <label>Release date</label>
                <input type="text" placeholder="2019, 2020" value={year} onChange={(e) => setYear(e.target.value)} />
                <label>Url</label>
                <input type="text" placeholder="Image Url" value={url} onChange={(e) => setUrl(e.target.value)} />
                <label>Description</label>
                <textarea placeholder="Description" value={plot} onChange={(e) => setPlot(e.target.value)}></textarea>
                <button>Create</button>
            </form>
        </div>

    </div>
  )
}
export default AddMovie;