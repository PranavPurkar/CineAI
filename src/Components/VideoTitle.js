import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24  text-white absolute bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-sm w-1/4'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-sm hover:bg-opacity-80 rounded-lg'> ▶️ Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 hover:bg-opacity-90  bg-opacity-50 rounded-lg'> ℹ️ More info!</button>
        </div>
    </div>
  );
};


export default VideoTitle