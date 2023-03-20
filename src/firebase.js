// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXz1oFD_mD62jYr2pAHRRo-3Sy6M0RWoM",
  authDomain: "chat-35836.firebaseapp.com",
  projectId: "chat-35836",
  storageBucket: "chat-35836.appspot.com",
  messagingSenderId: "1010315444707",
  appId: "1:1010315444707:web:4488e925fe528bb18360d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
