import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
   
  const user = useSelector(store => store.user);

  const navigate = useNavigate();
  const handleSignOut = () => {
      signOut(auth).then(() => {
        navigate("/")
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }

  return (
    <div className=' absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10'> 
          <img className='w-44'
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='Netflix logo' />
          {user && <div className='flex'>
              <img className='w-12 h-12 p-2 mt-2' src="https://pics.craiyon.com/2023-06-17/2b6e92cafd3c44aba2745ba63c890c3c.webp" 
              alt="user profile"/>
              <button onClick={handleSignOut} className='font-bold text-white'>(sign out)</button>
          </div>}
    </div>
   
  )
}

export default Header