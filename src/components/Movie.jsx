import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movieInfo}) => {
  const { id, title, poster_path, release_date, vote_average } = movieInfo;
  return (
    <Link to={`/movie/${id}`} className="movie-item">
      <span className="poster">
        <img src={ 'https://image.tmdb.org/t/p/w1280' + poster_path } alt="영화 포스터" />
      </span>
      <div className="movie-info">
        <strong className="title">{ title }</strong>
        <span className="open-date">개봉일 : { release_date }</span>
      </div>
      <span className="grade">⭐️ { vote_average }</span>
    </Link>
  )
}

export default Movie;