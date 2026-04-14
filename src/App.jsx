import React, { useState, useEffect } from 'react'
import './App.css'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'

// Define API base URL
const API_BASE_URL = 'https://api.themoviedb.org/3';

// Import API KEY
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Define API options
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
};

const App = () => {
  // Search Term State
  const [searchTerm, setSearchTerm] = useState('');
  // Error Message State
  const [errorMessage, setErrorMessage] = useState('');
  // Movies State
  const [movies, setMovies] = useState([]);
  // Loading State
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch movies based on search term
  const fetchMovies = async (query = '') => {
    // Set loading state and clear previous error messages
    setIsLoading(true);
    setErrorMessage('');

    try {
      // API endpoint for fetching popular movies (you can modify this to search based on the searchTerm)
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      // Make the API request
      const response = await fetch(endpoint, API_OPTIONS);


      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Error for incase no movies are found
      if (data.response === 'False') {
        setErrorMessage(data.error || "Failed to fetch movies");
        setMovies([]);
        return;
      }

      setMovies(data.results || []);

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      // stop loading state
      setIsLoading(false);
    }
  }

  // Handle movie search
  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <div className='pattern'>
        <div className='wrapper'>
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>

            {/* Search Component with state search */}
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          <section className='all-movies'>
            <h2 className='mt-[40px]'>AllMovies</h2>
            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className='text-red-500'>{errorMessage}</p>
            ) : (
              <ul>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>

    </main>

  )
}

export default App
