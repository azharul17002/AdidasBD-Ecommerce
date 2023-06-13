import React, { useContext, useEffect, useState } from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';


const Header = () => {
    const{user,logOut}=useContext(AuthContext)
    

  
    const renderNavbar = () => {
      if ( user && user.email === null) {
        return (
          <>
             </>
        );
      } else if(user && user.email === 'azaharsohan56@gmail.com'){
        return (
          <>
         
           <Link to="/dashboard">Dashboard</Link>
          </>
        );
      }
    }




    return (
     <nav className='header'>
           <img src={logo} alt="" />
           <div>
        
           
              
            <Link to="/">Home</Link>
            <Link to="/orderReview">Order Review</Link>
            <Link to="/manageinventory">Manage Inventory</Link>
           
            {renderNavbar()}
            <Link to="/about">About</Link>
           {
            user?.uid ? 
            <>
             <Link to='/profile'>Profile</Link>
            <Link onClick={logOut}>Log out</Link>
            </>
            :
            <>
              <Link to="/login">login</Link>
            <Link to="/signup">Signup</Link>
            
            </>
            
           }
        
         
        
          
           </div>
      
        </nav>

    );
};

export default Header;