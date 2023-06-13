import React from 'react';
import './Login.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import { useContext } from 'react';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
const {signIn}=useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || '/'
const handleSubmit =(event)=>{
    event.preventDefault();
    const form = event.target;
    const email=form.email.value;
    const password=form.password.value;

    signIn(email,password)
    .then(result =>{
        const user=result.user;
        console.log(user);
        form.reset();
        setSuccess('successfully login');
        navigate(from,{replace:true})
    })
    .catch(error =>{
        setError('Error found...',error);
    })

}

    return (
       
         <div className='form-container containers'>
            <h2 className='form-title brand-title' style={{textAlign:'center'}}>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="from-control user-box inputs">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            
            <p className='new-user'>New to AdidasBD <Link to='/signup'>Create a New Account</Link></p>
            <p style={{color:'green'}}>{success}</p>
            <p style={{color:'red'}}>{error}</p>



        </div>
     
    );
};

export default Login;