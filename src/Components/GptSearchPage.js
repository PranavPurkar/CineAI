import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../Utils/constants'

const GptSearchPage = () => {
  return (
    <>
    <div className='fixed -z-10'>
    <img className='h-screen md:h-full object-cover' src={BG_URL} alt='Netflix bg' />
    </div>
    <div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearchPage