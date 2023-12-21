import React, { useState, useReducer } from 'react';
import Movie from '../components/Movie';
import Tv from '../components/Tv';


const Search = ( { movieData, tvData } ) => {
  const [ selectValue, setSelectValue ] =  useState('');
  const [ searchText, setSearchText ] = useState('');

  const reducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
      case 'moive':
        return movieData.map( item => item ).filter( item => item.title.includes(action.payload) )
      case 'tv':
        return tvData.map( item => item ).filter( item => item.name.includes(action.payload))
      default : 
        return movieData.map( item => item ).filter( item => item.title.includes(action.payload) )
    }
  }
  const [ filterData, dispatch ] = useReducer( reducer, []);

  const selectChange = e => {
    setSelectValue(e.target.value);
  }
  const inputTextChange = e => {
    setSearchText(e.target.value);
  }


  return (
    <div className="search">
      <div className="search-bar">
        <select
          className="sel-sort" 
          onChange={ selectChange }>
          <option value="movie">영화</option>
          <option value="tv">TV 프로그램</option>
        </select>
        <input type="text" 
          placeholder="영화 제목을 입력해주세요." 
          value={searchText} 
          onChange={ inputTextChange }
        />
        <button type="button" onClick={()=> { 
          dispatch({ type : selectValue, payload: searchText });
          }} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
      <h2>검색 결과</h2>
      <div className="media-container">
        <div className="media-contents">
          <ul className="media-list">
            {
              filterData.map(items => { 
                return (
                  <li key={items.id}>
                    {
                      ( selectValue === 'movie' || selectValue === '' ) 
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
    </div>
  )
}

export default Search;