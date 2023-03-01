import React from "react";
import Add from "../image/upload.png"


const Login = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign in</button>
                </form>
                <p>Do not have a Account? Register</p>
            </div>
            </div>
    )
}
export default Login