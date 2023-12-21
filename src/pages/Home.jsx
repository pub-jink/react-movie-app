import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ movieData, tvData }) => {
  const movieList = [...movieData].splice(0, 5);
  const tvList = [...tvData].splice(0, 5);

  return (
    <div className="main-contents">
      <div className="top-title">
        <h2>현재 상영중</h2>
        <Link to="/movie">더보기</Link>
      </div>
      <ul className="media-list">
        {
          movieList.map(items => {
            return (
              <li key={ items.id }>
                <div className="media-items">
                  <span className="poster">
                    <img src={ 'https://image.tmdb.org/t/p/w1280' + items.poster_path } alt="영화 포스터" />
                  </span>
                  <strong className="title">{ items.title }</strong>
                </div>
              </li>
            )
          })
        }
      </ul>

      <div className="top-title">
        <h2>현재 방영중</h2>
        <Link to="/tv">더보기</Link>
      </div>
      <ul className="media-list">
        {
          tvList.map(items => {
            return (
              <li key={ items.id }>
                <div className="media-items">
                  <span className="poster">
                    <img src={ 'https://image.tmdb.org/t/p/w1280' + items.poster_path } alt="영화 포스터" />
                  </span>
                  <strong className="title">{ items.name }</strong>
                </div>
              </li>
            )
          })
        }
      </ul>
     
    </div>
  )
}

export default Home;