// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnuYkRcTh-YIBYquOZKw1aAacNrdtJ0jY",
  authDomain: "toy-store-2b837.firebaseapp.com",
  projectId: "toy-store-2b837",
  storageBucket: "toy-store-2b837.firebasestorage.app",
  messagingSenderId: "433867176055",
  appId: "1:433867176055:web:6081204b21ca2161356e72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);