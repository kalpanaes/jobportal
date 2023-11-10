import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import loginvalidations from './loginvalidations';
import axios from 'axios';


function Login() {
    const [values,setValues] = useState({
        email : "",
        password : ""
    });

    const handleInput = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
    }
    const [errors,setErrors] = useState({});

    const loginFormSubmit = (e) =>{
        e.preventDefault();
        setErrors(loginvalidations(values));

        const data = {
            email:values.email,
            password:values.password
        }

        axios.post('http://127.0.0.1:8000/api/login/',data).then(
            (response)=>{ 
                console.log(response);
            }
        ).catch((error)=>{
            console.log(error);
        })

    }


  return (
        
        <div className="container">
            <div className="signup-content">
                <form method="POST"  onSubmit={loginFormSubmit} className="signup-form" id="signup-form">
                    <h2 className="form-title">Login In</h2>
                    
                    <div className="form-group">
                        <label htmlFor='email'>Email</label>
                        <input type="email" className="form-input" name="email" onChange={handleInput} value={values.email} id="email" placeholder="Your Email"/>
                        {errors.email && <span className="error">{errors.email}</span>}
    
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password</label>
                        <input type="password" className="form-input" name="password" onChange={handleInput} value={values.password} id="password" placeholder="Password"/>
                        {errors.password && <span className="error">{errors.password}</span>}

                    </div>
                    
                    <div className="form-group">
                        <Link to="">Forgot Password</Link>
                    </div>
                    <div className="form-group">
                        <button type="submit" name="submit"  className="form-submit">Login In</button>
                    </div>
                
                <p className="loginhere login-signup-txt">
                    Not a existing user ? <Link to="/" className="btn btn-default loginhere-link">Sign Up</Link>
                </p>
                </form>
            </div>
        </div>
  
  )
}

export default Login