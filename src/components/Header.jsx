import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="header">
      <h1><Link to="/">JINGFLIX</Link></h1>
      <nav>
        <Link to="/movie">영화</Link>
        <Link to="/tv">TV 프로그램</Link>
        <Link to="/search" className="search-page">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          검색하기
        </Link>
      </nav>
    </header>
  )
}

export default Header;