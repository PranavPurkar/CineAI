import React from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import useMovieTrailer from '../hooks/useMovieTrailer';
import Header from './Header';
import { BG_URL, LOGO } from '../Utils/constants';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  
    useMovieTrailer(searchParams.get("v"));

  return (
    <div className='absolute w-screen'>
        <div className='fixed -z-10'>
            <img className='h-screen md:h-full object-cover' src={BG_URL} alt='Netflix bg' />
        </div>
        <div className='absolute flex '>
            <a href='/browse'>
            <button className='py-2 px-4 justify-left  my-3 rounded-lg bg-purple-900 text-white ml-[1400px]'>
                HomePage
            </button>
            </a>
        </div>
        <div className='w-screen '>
            <iframe 
                className='w-screen h-[800px]  aspect-video'
                src={"https://www.youtube.com/embed/"+ trailerVideo?.key}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </div>
    </div>
  )
}

export default WatchPage