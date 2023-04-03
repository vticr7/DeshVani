// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3TyOIEPn3_YGslp_XAWuIPUnISbnEI5g",
  authDomain: "caht-2.firebaseapp.com",
  projectId: "caht-2",
  storageBucket: "caht-2.appspot.com",
  messagingSenderId: "853921095828",
  appId: "1:853921095828:web:e27f062d8a197842be9481"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
