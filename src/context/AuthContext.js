import { onAuthStateChanged } from "firebase/auth";
import { createContext,useState,useEffect, } from "react";
import { unstable_useBlocker } from "react-router-dom";
import { auth } from "../firebase"

export const AuthContext= createContext()

export const AuthContextProvider=({children})=>{

    const[currentUser,setCurrrentUser]= useState({})
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(user)=>{
            setCurrrentUser(user);
            console.log(user)




        });

         return()=>{
            unsub();
         };


    },[]);
    
    
    return(
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    ); 
}