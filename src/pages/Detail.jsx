import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = ({ mediaData, type }) => {
  const { id } = useParams();
  let detailData= mediaData.find(items => items.id == id );
  
  if ( !detailData ) return <div className="no-list"><span>😱😱</span></div>
  return (
    <div className="media-detail-contents" style={{ 
      backgroundImage: `url(${'https://image.tmdb.org/t/p/w1280' + detailData.backdrop_path})`
    }}>
      <div className="media-detail">
        {
          infoData(type, detailData)
        }
        <img src={ 'https://image.tmdb.org/t/p/w1280' + detailData.poster_path } alt="영화 포스터" />
      </div>
    </div>
  )
}

const infoData = (type, info) => {
  switch(type) {
    case 'movie': 
      return (
        <div className="media-info">
          <strong className="title">{ info.title }</strong>
          <span className="original-title">{ '[' + info.original_title + ']' }</span>
          <span className="open-date">개봉일 : { info.release_date }</span>
          <span className="grade">평점 : ⭐️ { info.vote_average }</span>
          <span className="like">추천 수 : 👍🏻 { info.vote_count }</span>
          <p>{ info.overview }</p>
        </div>
      )
    case 'tv':
      return (
        <div className="media-info">
          <strong className="title">{ info.name }</strong>
          <span className="original-title">{ '[' + info.original_name + ']' }</span>
          <span className="open-date">첫 방영 : { info.first_air_date }</span>
          <span className="grade">평점 : ⭐️ { info.vote_average }</span>
          <span className="like">추천 수 : 👍🏻 { info.vote_count }</span>
          <p>{ info.overview }</p>
        </div>
      )
    default:
      return '';
  }
}

export default Detail;