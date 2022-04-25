import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        //some fancy firebase login shitt 
    }
    const register = e => {
        e.preventDefault();

        //some fancy firebase shittttt
    }
  return (
    <div className='login'>
        <Link to='/'>
            <img className="login__logo" 
            src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />
        </Link>

        <div className="login__container">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange=
                {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange=
                {e => setPassword(e.target.value)} />

                <button type='submit' OnClick={signIn}
                className='login__SignInButton'>Sign In</button>
            </form>

            <p>
                By signing in you agree to the amazon conditions 
                of Use and Sale.
            </p> 

            <button type='submit' OnClick={register} className='login__registerButton'>Create Account Amazon account</button>       

        </div>    
    </div>
  )
}

export default Login
