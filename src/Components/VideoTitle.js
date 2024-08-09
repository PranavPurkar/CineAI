import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24  text-white absolute bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg'> ▶️ Play</button>
            <button className='mx-2 bg-gray-500 text-white p-4 px-12 hover:bg-opacity-90 text-xl bg-opacity-50 rounded-lg'> ℹ️ More info!</button>
        </div>
    </div>
  );
};


export default VideoTitle