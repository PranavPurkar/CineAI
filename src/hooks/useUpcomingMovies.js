import { API_OPTIONS } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import {addUpcomingMovies } from '../Utils/movieSlice';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
    
    const dispatch = useDispatch();

    const UpcomingMovies = useSelector((store) => store.movies.UpcomingMovies);
    const getUpcomingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
      !UpcomingMovies &&  getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;