import React from 'react';
import Loading from './pages/Loading';
import Error from './pages/Error';
import MediaList from './pages/MediaList';
import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Header from './components/Header';
import useMedia from './services/media_api';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [ movieData, tvData, loading, error ] = useMedia();

   // 대기 중일 때
  if ( loading ) return <Loading /> 
  // 에러
  if ( error ) return <Error />
  // 아직 mediaData 값이 설정되지 않았을 때
  if ( !movieData ) return null
  
  return (
    <div className="main">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home movieData={ movieData } tvData={tvData} />} /> 
          <Route path="/movie" element={
            <MediaList mediaData={ movieData } type='movie'>현재 상영중</MediaList>} />
          <Route path="/movie/:id" element={ <Detail mediaData={ movieData } type="movie" /> } />
          <Route path="/tv" element={
            <MediaList mediaData={ tvData } type='tv'>현재 방송중</MediaList> } />
          <Route path="/tv/:id" element={ <Detail mediaData={ tvData } type="tv" /> } />
          <Route path="/search" element={<Search movieData={ movieData } tvData={ tvData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
