import React from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { useContext, useState, useEffect } from 'react';
import './Profile.css'
import { Link } from 'react-router-dom';


const Profile = () => {
    const {user}=useContext(AuthContext);
    const [userinfos,setUserinfo]=useState([]);
    const [orderlist,setOrderList]=useState([]);

    useEffect(() => {
        const email=user.email;
    fetch(`http://localhost:5000/userlist?email=${email}`)
    .then(res =>res.json())
    .then(data =>setUserinfo(data)
     )
    },[])


    useEffect(() => {
        const email=user.email;
    fetch(`http://localhost:5000/orderlistsingle?email=${email}`)
    .then(res =>res.json())
    .then(data =>setOrderList(data)
     )
    },[])


    
    return (
        <div className='container '>
            <br />
            <br />
            {
                userinfos.map(userinfo => <div className='ppdesign'><h3>Welcome MR <span className='user-name'>{userinfo.name}</span></h3><br />
                <h4>Email: <span style={{color:'maroon'}}>{userinfo.email}</span></h4>
                <br />
                 <img style={{width:'160px',borderRadius:'50%'}} src={userinfo.image} alt="" />
                 <br />
                 <br />
                 <h4>Gender : <span style={{color:'maroon'}}>{userinfo.gender}</span></h4>
                 <h5>verified email:True</h5>
                 <br />
                 <h6>Last sign in :{user.metadata.lastSignInTime}</h6>
                 <br />
                 <div className='product-design'>
                 <p>Recommended for you</p>
                 {userinfo.gender === 'male' ? (
       <Link style={{color:'yellow'}} to='/maleproduct'>Male Products</Link>
      ) : (
        <Link style={{color:'yellow'}} to='/femalecollection'>FeMale Products</Link>
      )}
                 </div>
             <br />
             <br />    
                <button className='linkbutton'><Link style={{textDecoration:'none',color:'white'}} to="/singleorderlist">Your Order List</Link></button>
                 </div>)
            }
            <br />
          
            <div className='btnDesignss'>
            <button ><Link style={{textDecoration:'none',color:'black',
                 fontWeight:'600'}} to="/profiledetails">Edit Profile</Link></button>
            </div>
  
        </div>
    );
};

export default Profile;