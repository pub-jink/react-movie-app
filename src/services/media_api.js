import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useMedia() {
    const [ movieData, setMovieData ] = useState('');
    const [ tvData, setTvData ] = useState('');
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState(false);

    useEffect(()=> {
        setLoading(true);
        const apiMovie= "https://api.themoviedb.org/3/movie/now_playing?api_key=f34589c28365122cf81bfefc069e3e2a&language=ko&page=1&region=KR"
        const apiTv = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=f34589c28365122cf81bfefc069e3e2a&language=ko&page=1&region=KR';
        axios.all([axios.get(apiMovie), axios.get(apiTv)]) // promise 객체 반환
        .then((response) => {
            setMovieData(response[0].data.results)
            setTvData(response[1].data.results);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            setError(true);
            console.log('error');
        })
    }, []);
    

    return [ movieData, tvData, loading, error ];
}