import React, { useState } from "react";
import Add from "../image/upload.png"

import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,storage} from "../firebase"
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const Register = () => {
    const[err,setErr]=useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const displayName=e.target[0].value;
        const email=e.target[1].value;
        const password =e.target[2].value;
        const file=e.target[3].files[0];

        // const auth = getAuth();
        try{      // const auth = getAuth();
        const res=createUserWithEmailAndPassword(auth, email, password)
            
 
        const storageRef = ref(storage, displayName);

        const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on( 
  (error) => {
    setErr(true); 
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
     await updateProfile((await res).user,{
        displayName,
        photoURL:downloadURL,

     })
    });
  }
);
        }catch(err){
            setErr(true);
        }


//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="null" />
                        <span>Add Profile Pic</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something is wrong</span>}
                </form>
                <p>Do have a Account? Login</p>
            </div>
        </div>
    )
}
export default Register