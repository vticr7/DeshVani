import React from "react";
import Add from "../image/upload.png"


const Register = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder="display name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="null" />
                        <span>Add Profile Pic</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Do have a Account? Login</p>
            </div>
            </div>
    )
}
export default Register