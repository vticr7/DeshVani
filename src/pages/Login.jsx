import React from "react";
import Add from "../image/upload.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Login = () => {

    const [err, setErr] = useState(false)
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const email = e.target[0].value;
        const password = e.target[1].value;
        


        // const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth,email,password);
            navigate("/")
          
        } catch (err) {
          setErr(true);
          // setLoading(false);
        }
      };
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat</span>
                <span className="title">Login</span>
                
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign in</button>
                    {err && <span>Something is wrong</span>}
                </form>
                <p>Do not have a Account? <Link to="/register">Register</Link></p>
            </div>
            </div>
    )
}
export default Login