import React from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

const Admin = () => {
    const {user}=useContext(AuthContext);
    const [success,setSuccess]=useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data);
        const url = `http://localhost:5000/admin`;
        fetch(url, {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
         
        })
          .then((res) => res.json())
          .then((result) => {   
          });
        
      
        setSuccess('  Admin Request  Confirm successfully.')
    }





    return (
        <div style={{width:'450px',marginLeft:'550px',marginTop:'100px',borderRadius:'10px',boxShadow:'10px 10px 10px 10px grey',padding:'25px' }}>
            <form className='ship-forms' onSubmit={handleSubmit(onSubmit)}>

           <h4 style={{textAlign:'center',color:'orange',marginTop:'50px'}}>You can add an admin here.</h4>
           <input style={{width:'350px',backgroundColor:'cyan',fontSize:'17px',padding:'15px',marginLeft:'35px',height:'50px',marginTop:'30px',border:'none',color:'black'}}  className='ship-form-input'  name="fullname" placeholder='full name'  {...register("fullname", { required: true })} />
               {errors.phoneNumber && <span style={{color:'red'}}>Full name  is required</span>}
               
           <input style={{width:'350px',backgroundColor:'cyan',fontSize:'17px',marginLeft:'35px',height:'50px',padding:'15px',marginTop:'30px',border:'none',color:'black'}} className='ship-form-input'  name="email"  placeholder='email'  {...register("email", { required: true })} />
               {errors.email && <span style={{color:'red'}}>Email is required</span>}
                
               <hr />
               <input className='btnDesign' type="submit" style={{border:'none',marginLeft:'35px',background:'grey',fontSize:'20px',width:'350px'}} />
               <br />
               </form>
               <br />
               {
                <h2 style={{color:'green'}}>{success}</h2>
             }
        </div>
    );
};

export default Admin;