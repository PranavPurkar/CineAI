import { API_OPTIONS } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    const getNowplayingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
       !nowPlayingMovies && getNowplayingMovies();
    }, []);
};

export default useNowPlayingMovies;