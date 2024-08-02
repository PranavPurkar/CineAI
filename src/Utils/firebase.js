// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRziPTgbxKvkf7vyPnM_z-83wZN6HCs4U",
  authDomain: "cineai-60a96.firebaseapp.com",
  projectId: "cineai-60a96",
  storageBucket: "cineai-60a96.appspot.com",
  messagingSenderId: "999583863551",
  appId: "1:999583863551:web:5c0b89fe97b8a10aa172ca",
  measurementId: "G-ZLXHE38030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);