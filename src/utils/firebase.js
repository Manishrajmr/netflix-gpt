// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhdBVeYA4TJZ-bRm-cKeMNF_5OUwtue14",
  authDomain: "netflixgpt-26a28.firebaseapp.com",
  projectId: "netflixgpt-26a28",
  storageBucket: "netflixgpt-26a28.appspot.com",
  messagingSenderId: "840973572326",
  appId: "1:840973572326:web:6e261f7d33b0d16decc327",
  measurementId: "G-REDMSG3YY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);