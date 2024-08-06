import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, USER_ICON } from '../Utils/constants';

const Header = () => {
   
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName,photoURL} = user;
          dispatch(addUser({Uid: uid, Email: email, Name: displayName, Photo: photoURL}));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });

      return () => unsubscribe();
}, []);



  const handleSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }

  return (
    <div className=' absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10'> 
          <img className='w-44'
          src={LOGO}
          alt='Netflix logo' />
          {user && <div className='flex'>
              <img className='w-12 h-12 p-2 mt-2' src={USER_ICON}
              alt="user profile"/>
              <button onClick={handleSignOut} className='font-bold text-white'>(sign out)</button>
          </div>}
    </div>
   
  )
}

export default Header