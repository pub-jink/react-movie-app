import React from 'react';
import Movie from '../components/Movie';
import Tv from '../components/Tv';

const MediaList = ({ mediaData, type, children }) => {
  return (
    <div className="media-container">
      <h2>{ children }</h2>
      <div className="media-contents">
        <ul className="media-list">
          {
            mediaData.map(items => { 
              return (
                <li key={items.id}>
                  {
                    ( type === 'movie' ) 
                      ? <Movie movieInfo={ items } />
                      : <Tv tvInfo={ items } />
                  }
                </li>
              )
            })
          }
        </ul>
      </div>      
    </div>
  )
  
}

export default MediaList;

