//react arrow function export component ( rafce )
import {Validate,ValidateAll } from '../Utils/Validate';
import Header from './Header'
import React from 'react'
import { useRef, useState } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser} from '../Utils/userSlice';

const Login = () => {
 
      const dispatch = useDispatch();

      const navigate = useNavigate();
      const [isSigninform, setIsSigninform] = useState(true);
      const [errorMessage,seterrorMessage] = useState(null);
            const toggleSigninform = () => {
          setIsSigninform(!isSigninform);
    };

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
   
        
      const Handlebuttonclick = () => {
        let message;
        if(!isSigninform)
        {    
          message = ValidateAll(email.current.value, password.current.value, name.current.value);
        }
        else
        {
          message = Validate(email.current.value, password.current.value);
        }
        seterrorMessage(message); 
        if(message) return;

        if(!isSigninform)
        {
            //SIGNUP LOGIC
            createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName:name.current.value
              }).then(() => {
                const {uid, email, displayName,photoURL} = auth.currentUser;
                dispatch(addUser({Uid: uid, Email: email, Name: displayName}));
                navigate("/browse");
              }).catch((error) => {
                 seterrorMessage(error.message);
              });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage(errorCode + "-" + errorMessage);
              // ..
            });
        }
        else
        {    //SIGN IN LOGIC
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage("User Not Registered");
            });

        }
    };
    



  return (
    <div>
    <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg'
            alt='Netflix bg' />
        </div>
    <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg opacity-80'> 
        <h1 className='font-bold text-3xl py-4'>{isSigninform ? 'Sign in' : 'Sign Up'}</h1>

        {!isSigninform && <input 
        ref={name}
        type='text' 
        placeholder='Full Name' 
        className='p-4 my-4 w-full bg-gray-700'/>}

        <input 
        ref={email}
        type='text' 
        placeholder='Email or phone number' 
        className='p-4 my-4 w-full bg-gray-700'/>

        <input 
        ref={password}
        type='password' 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-700'/>
  
        <p className='text-red-500 font-bold py-4 text-lg'>{errorMessage}</p>
        <button  className='p-4 my-6 bg-red-700 w-full' onClick={Handlebuttonclick}>{isSigninform ? 'Sign in': 'Sign UP'}</button>

        <p className='py-4 cursor-pointer' onClick={toggleSigninform}>{!isSigninform?'Already registered? Sign-in now.':'New to Netflix? Sign-up now.'}</p>
    </form>
    </div>
  )
}

export default Login