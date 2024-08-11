import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"; 
import gptReducer from "./gptslice";


const appstore = configureStore (
    {
        reducer: {
            user : userReducer,
            movies : moviesReducer,
            gpt : gptReducer,
        },
    }
);

export default appstore