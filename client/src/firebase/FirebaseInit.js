// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLf18kU47Tv_uyYnbEDFpivehGYiqyiUI",
  authDomain: "coffee-store-24d53.firebaseapp.com",
  projectId: "coffee-store-24d53",
  storageBucket: "coffee-store-24d53.appspot.com",
  messagingSenderId: "1099048522731",
  appId: "1:1099048522731:web:f784b90a712079114c3fae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
