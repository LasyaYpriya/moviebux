import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React, {useState, useEffect} from 'react';

const movieData = [
  {
    id: 1,
    title: "Dark Storm",
    image: "1.jpg",
    genre: "drama",
    rating: "8.3",
  },
  {
    id: 2,
    title: "Whisper of Fate",
    image: "2.jpg",
    genre: "fantasy",
    rating: "7.7",
  },
  {
    id: 3,
    title: "Beyond the Edge",
    image: "3.jpg",
    genre: "horror",
    rating: "6.3",
  },
  {
    id: 4,
    title: "Lost in Shadows",
    image: "4.jpg",
    genre: "action",
    rating: "9.3",
  },
  {
    id: 5,
    title: "Echoes of Power",
    image: "5.jpg",
    genre: "fantasy",
    rating: "6.9",
  },
  {
    id: 6,
    title: "Grim Reckoning",
    image: "6.jpg",
    genre: "drama",
    rating: "8.4",
  },
  {
    id: 7,
    title: "Fury's Flight",
    image: "7.jpg",
    genre: "action",
    rating: "9.8",
  },
  {
    id: 8,
    title: "Path of the Forgotten",
    image: "8.jpg",
    genre: "action",
    rating: "7.2",
  },
  {
    id: 9,
    title: "Nightmare's Threshold",
    image: "9.jpg",
    genre: "horror",
    rating: "1.7",
  },
  {
    id: 10,
    title: "Eternal Hunt",
    image: "10.jpg",
    genre: "fantasy",
    rating: "7.5",
  },
  {
    id: 11,
    title: "Legacy of the Void",
    image: "11.jpg",
    genre: "action",
    rating: "8.5",
  },
  {
    id: 12,
    title: "Shadow's Crescent",
    image: "12.jpg",
    genre: "horror",
    rating: "7.5",
  },
  {
    id: 13,
    title: "Crimson Dawn",
    image: "13.jpg",
    genre: "fantasy",
    rating: "8.4",
  },
  {
    id: 14,
    title: "Silent Kingdom",
    image: "14.jpg",
    genre: "fantasy",
    rating: "6.5",
  },
  {
    id: 15,
    title: "Mystic Rite",
    image: "15.jpg",
    genre: "fantasy",
    rating: "9.8",
  },
  {
    id: 16,
    title: "Reign of the Lost",
    image: "16.jpg",
    genre: "horror",
    rating: "9.1",
  },
  {
    id: 17,
    title: "Timeless Myth",
    image: "17.jpg",
    genre: "drama",
    rating: "4.0",
  },
  {
    id: 18,
    title: "Oath of the Fallen",
    image: "18.jpg",
    genre: "fantasy",
    rating: "6.3",
  },
  {
    id: 19,
    title: "Veil of Night",
    image: "19.jpg",
    genre: "drama",
    rating: "9.5",
  },
  {
    id: 20,
    title: "Guardians of Twilight",
    image: "20.jpg",
    genre: "horror",
    rating: "7.4",
  },
];

function App() {
const [movies, setMovies] = useState([]);
const [watchlist, setWatchlist] = useState([]);

useEffect(() =>{
  fetch(movieData)
  .then(response => response.json())
  .then(data => setMovies(data))
   }, []);

   const toggleWatchlist =(movieId) => {
    setWatchlist(prev =>
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]

    )
   }



  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
         <nav>  
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/watchlist">Watchlist</Link>
            </li>
            </ul>     
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}></Route>
            <Route path="/watchlist" element={<Watchlist watchlist={watchlist} movies={movies}  toggleWatchlist={toggleWatchlist} />}></Route>
          </Routes>
        </Router>
     </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
