// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD2q-y4cbSjSxg4onInYlvAZKyHiHYMKTM",
  authDomain: "clone-1-7c4e5.firebaseapp.com",
  projectId: "clone-1-7c4e5",
  storageBucket: "clone-1-7c4e5.appspot.com",
  messagingSenderId: "622195959038",
  appId: "1:622195959038:web:d80240d40d0476769131af",
  measurementId: "G-36WYP260BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;