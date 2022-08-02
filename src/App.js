import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Review from './components/Review';
import AddMovie from './components/AddMovie';
import {useState, useEffect} from 'react'

const movieApi = 'http://localhost:8000/movies'

function App() {
  
  const [movies, setMovies] = useState([]);
  //fetch movies from db
  useEffect(() => {
    fetch(movieApi)
    .then(res => res.json())
    .then( data => setMovies(data) );
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movies" element={<Movies movies={movies}/>} />
        <Route path="/reviews" element={<Review movies={movies} />} />
        <Route path="/add-review" element={<AddMovie />} />
      </Routes>
      
    </div>
  );
}

export default App;
