import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from '../Utils/constants';
import { toggleGptSearchView } from '../Utils/gptslice';
import { ChangeLanguage } from '../Utils/configSlice';

const Header = () => {
   
  const GPTSearch = useSelector((store) => store.gpt.showGptSearch);
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

const handleLanguageChange = (e) => {
   dispatch(ChangeLanguage(e.target.value));
}
const handleGptSearchClick = () => {
   dispatch(toggleGptSearchView());
}

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
              {GPTSearch && <select className=' py-3 px-4 mx-4 my-3 rounded-lg  bg-gray-900 text-white cursor-pointer' onChange={handleLanguageChange}>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value = {lang.identifier}>
                      {lang.name}
                      </option> 
                    ))}
              </select>}
              <button className='py-2 px-4 mx-4 my-2 rounded-lg bg-purple-900 text-white'
                onClick={handleGptSearchClick}>
                {GPTSearch ? "Home Page" : "GPT Search"}
                </button>
              <img className='w-12 h-12 p-2 mt-2' src={USER_ICON}
              alt="user profile"/>
              <button onClick={handleSignOut} className='font-bold text-white'>(sign out)</button>
          </div>
          }
    </div>
   
  )
}

export default Header