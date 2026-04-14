import React, { useState,useEffect } from 'react'
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

  const [searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
  
    },[]
  }
  return (
    <main>
      <div className='pattern'>
        <div className='wrapper'>
          <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
          </header>

          {/* Search Component with state search */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         
        </div>
      </div>

    </main>

  )
}

export default App
