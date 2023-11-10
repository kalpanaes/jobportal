import React, {useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import validations from './validations';
import axios from 'axios';

function Signup() {

    const [values,setValues] = useState({
        username : "",
        first_name : "",
        last_name : "",
        email : "",
        password : ""
    });

    const handleInput = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]})
    }
    const [errors,setErrors] = useState({});

    const signUpFormSubmit = (e) =>{
        e.preventDefault();
        setErrors(validations(values));

        const data = {
            username:values.username,
            first_name:values.first_name,
            last_name:values.last_name,
            email:values.email,
            password:values.password
        }

        axios.post('http://127.0.0.1:8000/api/useradd/',data).then(
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
                <form method="POST" onSubmit={signUpFormSubmit} id="signup-form" className="signup-form">
                    <h2 className="form-title">Sign Up</h2>
                    <div className="form-group">
                        <label htmlFor='firstname'>User Name</label>
                        <input type="text" className="form-input" name="username" onChange={handleInput} value={values.username} placeholder="Your Name"/>
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor='firstname'>First Name</label>
                        <input type="text" className="form-input" name="first_name"  onChange={handleInput} value={values.first_name} placeholder="Your Name"/>
                        {errors.first_name && <span className="error">{errors.first_name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor='lastname'>Last Name</label>
                        <input type="text" className="form-input" name="last_name"  onChange={handleInput} value={values.last_name} />
                    </div>
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
                        <input type="submit" name="submit" id="submit" className="form-submit" value="Sign up"/>
                    </div>
                </form>
                <p className="loginhere">
                    Have already an account ? <Link to="/login" className="loginhere-link">Login here</Link>
                </p>
            </div>
        </div>
        
       
  )
}

export default Signup