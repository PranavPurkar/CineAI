//react arrow function export component ( rafce )
import Header from './Header'
import React, { useState } from 'react'
const Login = () => {
 
const [isSigninform, setIsSigninform] = useState();
const toggleSigninform = () => {
     setIsSigninform(!isSigninform);
};



  return (
    <div>
    <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg'
            alt='Netflix bg' />
        </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg opacity-80'> 
        <h1 className='font-bold text-3xl py-4'>{isSigninform ? 'Sign in' : 'Sign Up'}</h1>
        {!isSigninform && <input 
        type='text' 
        placeholder='Full Name' 
        className='p-4 my-4 w-full bg-gray-700'/>}
        <input 
        type='text' 
        placeholder='Email or phone number' 
        className='p-4 my-4 w-full bg-gray-700'/>
        <input 
        type='password' 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-6 bg-red-700 w-full'>{isSigninform ? 'Sign in' : 'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSigninform}>{!isSigninform?'Already registered? Sign-in now.':'New to Netflix? Sign-up now.'}</p>
    </form>
    </div>
  )
}

export default Login