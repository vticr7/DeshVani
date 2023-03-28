// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOfu1-mlnLzUMODlrhhjrpcOgQ4slK4NE",
  authDomain: "chhat-5b858.firebaseapp.com",
  projectId: "chhat-5b858",
  storageBucket: "chhat-5b858.appspot.com",
  messagingSenderId: "522090447838",
  appId: "1:522090447838:web:af8db74efd64c4775d934f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
