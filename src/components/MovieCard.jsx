import React from 'react';

const MovieCard = ({ movie: { id, title, vote_average, 
    poster_path, release_date, original_language } }) => {
        
  return (
    <div>
      <p key={id} className='text-white'>{title}</p>
    </div>
  );
};

export default MovieCard;