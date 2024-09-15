import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
import useMovieTrailer from '../hooks/useMovieTrailer'

const MovieList = ({title, movies}) => {

  return (
    <div className='px-4'>
         <h1 className='text-lg md:text-2xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {movies?.map((movie) => 
                   <Link to={"/watch?v=" + movie.id}><MovieCard key={movie.id} poster_path={movie.poster_path}/></Link>)}
            </div>           
        </div>
    </div>
  )
}

export default MovieList