import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDXHTm4lyPV2Pkc8xtyeXnQXrKyBAmjn74",
    authDomain: "reactlogin-a6e0f.firebaseapp.com",
    projectId: "reactlogin-a6e0f",
    storageBucket: "reactlogin-a6e0f.appspot.com",
    messagingSenderId: "540300203500",
    appId: "1:540300203500:web:8aad353ea2215555d8dcc9",
    measurementId: "G-1P2XZEYWM5"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  export {app,auth};