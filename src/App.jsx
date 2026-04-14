import React, { useState, useEffect } from 'react'
import './App.css'
import Search from './components/Search'

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

  const [searchTerm, setSearchTerm] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  // Function to fetch movies based on search term
  const fetchMovies = async () => {
    try {
      // API endpoint for fetching popular movies (you can modify this to search based on the searchTerm)
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      // Make the API request
      const response = await fetch(endpoint, API_OPTIONS);


      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Error for incase no movies are found
      if(data.response === 'False') {
        setErrorMessage(data.error || "Failed to fetch movies");
      }

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    }
  }

  // Handle movie search
  useEffect(() => {
    fetchMovies();
  }, []);

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
            <h2>AllMovies</h2>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          </section>
        </div>
      </div>

    </main>

  )
}

export default App
