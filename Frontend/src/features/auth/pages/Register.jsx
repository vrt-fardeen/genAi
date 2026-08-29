import React, { useState } from 'react'
import {useNavigate, Link} from "react-router";

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle register logic here
    }

  return (
    <main>
            <div className="form-container">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' name="username" placeholder="Enter username" ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type = "email" id='email' name="email" placeholder="Enter email address" ></input>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name="password" placeholder="Enter password" ></input>
                    </div>

                    <button className='button primary-button' >Register</button>
                </form>

                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
    


        </main>
  )
}

export default Register
