import React, { useState, useContext } from "react";
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../Contexts/UserContext";
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from "../../Firebase/Firebase.config";
import googleicon from '../../images/download.jpg'

const auth = getAuth(app);
const Signup = () => {
    const { createUser } = useContext(AuthContext)
  

    const provider = new GoogleAuthProvider();
    const handlegoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const user = res.user;
                console.log(user)
                setSuccess('successfully login');
           
                
            })
    }
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm)
        if (password.length < 6) {
            setError('password should be 6 characters or more');
            return;
        }

        if (password !== confirm) {
            setError('your password did not match');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess('successfully login');
                
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='login-box sign-design'>
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleSubmit}>



                <div className="user-box ">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>

                <div className="user-box">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                    <span style={{marginLeft:'30px'}}>*password should be 6 characters or more</span>
                </div>
                <div className="user-box">
                    <label htmlFor="confirm" style={{marginTop:'10px'}}>Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input  type="submit" value="Sign up" style={{backgroundColor:'blueviolet',color:'white',width:'420px',margin:'30px'}} />
            </form>

            <p className='new-user' style={{textAlign:'center',fontSize:'20px'}}>Already Have an Account <Link style={{color:'yellow'}} to='/login'>Login</Link></p>
            <hr />
            <p style={{textAlign:'center',color:'wheat',fontSize:'15px',fontWeight:'900'}}>or</p>

            <p style={{ color: 'red' }}>{error}</p>
            <h3 style={{ color: 'blue' }}>{success}</h3>
           
           <button className="btn-submit user-box"style={{backgroundColor:'white',color:'green',width:'420px',margin:'30px',height:'50px',border:'none'}} onClick={handlegoogleSignIn}><img style={{height:'25px',paddingRight:'15px'}} src={googleicon} alt="" /> Sign up with google</button>
       </div>

    );
};

export default Signup;