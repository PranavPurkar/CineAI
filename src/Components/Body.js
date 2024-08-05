import React, { useEffect} from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();

    const approuter = () => createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName,photoURL} = user;
              dispatch(addUser({Uid: uid, Email: email, Name: displayName, Photo: photoURL}));
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });
    }, []);

    return (
        <RouterProvider router={approuter()} />
    );
}

export default Body