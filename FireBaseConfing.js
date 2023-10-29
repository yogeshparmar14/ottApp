// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArpYowGsN9pSGgxMppmDHhlrqOYLtdty0",
  authDomain: "ott-app-10431.firebaseapp.com",
  projectId: "ott-app-10431",
  storageBucket: "ott-app-10431.appspot.com",
  messagingSenderId: "995779593632",
  appId: "1:995779593632:web:f878b8cc8f7d71167590c5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);