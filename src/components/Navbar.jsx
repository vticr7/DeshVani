import React from "react";
import { signOut } from "firebase/auth";
import{auth} from '../firebase'
const Navbar = () => {
    return(
    <div className="navbar">
        <span className="logo">Chat Application</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
            <span>Vaibhav</span>
            <button onClick={()=>signOut(auth)}>Logout</button>
        </div>
    </div>
    )
        
}

export default Navbar