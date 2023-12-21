import React from 'react';
import { Link } from 'react-router-dom';

const Tv = ({ tvInfo}) => {
  const { id, name, poster_path, first_air_date, vote_average } = tvInfo;

  return (
    <Link to={`/tv/${id}`} className="movie-item">
      <span className="poster">
        <img src={ 'https://image.tmdb.org/t/p/w1280' + poster_path } alt="영화 포스터" />
      </span>
      <div className="movie-info">
        <strong className="title">{ name }</strong>
        <span className="open-date">첫 방영 : { first_air_date }</span>
      </div>
      <span className="grade">⭐️ { vote_average }</span>
    </Link>
  )
}

export default Tv;