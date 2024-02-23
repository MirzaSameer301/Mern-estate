// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-69bea.firebaseapp.com",
  projectId: "mern-estate-69bea",
  storageBucket: "mern-estate-69bea.appspot.com",
  messagingSenderId: "584050587800",
  appId: "1:584050587800:web:b46c4789a9d0479721f8ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);