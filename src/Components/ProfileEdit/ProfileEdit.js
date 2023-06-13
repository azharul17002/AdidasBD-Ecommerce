import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {

    const {user}=useContext(AuthContext);
    
    const [success,setSuccess]=useState();
    const navigate = useNavigate();

    const imageHostKey='2197c7b78b0a7e49e77aa66be3ecb511';
    console.log(imageHostKey)


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData.data.url);
                
                const user = {
                    name: data.FullName, 
                    email: data.Email,
                    address:data.address,
                    phone:data.phonenumber,
                    gender:data.gender,
                  image: imgData.data.url
        }

        const url = `http://localhost:5000/userprofile`;
        fetch(url, {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
         
        })
          .then((res) => res.json())
          .then((result) => {
            navigate('/profile')
          })

    })
        setSuccess(' Your profile successfully saved.')
        }




    return (
        <div className="container shipment-design">
     
        <form className='ship-forms' onSubmit={handleSubmit(onSubmit)}>
        <h4>Update Your Profile</h4>    
        
        <div className='labelDesign'>
              <label htmlFor="">Full Name</label> 
               
                <input className='ship-form-input' type='text' name="Fullname" placeholder='Full Name'   {...register("FullName",{ required: true })} />
                 <br />
                 <label htmlFor="">Email</label> 
               <input className='ship-form-input'  name="email"  placeholder='email'  value={user.email} {...register("Email", { required: true })} />
               {errors.email && <span style={{color:'red'}}>Email is required</span>}
         
               <br />
                  <label htmlFor="">Address</label> 
                 
                <input className='ship-form-input'  name="address" type='text'  {...register("address",{required:true})} />

                <br /><label htmlFor="">Mobile Number</label>

             <input className='ship-form-input' type='number' name="phonenumber"   {...register("phonenumber",{required:true})} />

             <br /><br /><label style={{display:'inline'}} >
        Gender
        <select style={{marginLeft:'130px',width:'200px',padding:'5px',borderRadius:'8px',
        background:'cyan',textAlign:'center'}}
         name="gender" {...register("gender",{required:true})}>
         
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      <br />
      <br />
<div style={{display:'flex'}}>
   
<label htmlFor="">Upload profile picture</label>
      <input style={{marginLeft:'20px',width:'400px',padding:'5px',borderRadius:'8px',
        background:'grey',textAlign:'center'}} type="file"  {...register("image",{required:true})}/>
</div>
                </div>
         
               <input className='btnDesign' type="submit" style={{border:'none',background:'green',fontSize:'20px',marginLeft:'80px'}} value="update"/>
               <br />
           
         
             </form>
             {
                <h2 style={{color:'grey'}}>{success}</h2>
             }
                  
        
              </div>
            
    );
};

export default ProfileEdit;