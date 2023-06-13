import React from 'react';
import './Shipping.css'
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from './../Contexts/UserContext';

const Shipping = ({pd}) => {
  const {name,price,quantity}=pd;

    const {user}=useContext(AuthContext);
    
    const [success,setSuccess]=useState();

    const [userinfos,setUserinfo]=useState([]);

    useEffect(() => {
        const email=user.email;
    fetch(`http://localhost:5000/userlist?email=${email}`)
    .then(res =>res.json())
    .then(data =>setUserinfo(data)
     )
    },[])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
      console.log(data);
      const url = `http://localhost:5000/orderdetails`;
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
 
       
        setSuccess('Confirm Your Products successfully.')
    }

    
  console.log(watch("example")); 
 


    return (
        

        <div className="container shipment-design">
     
        <form className='ship-forms' onSubmit={handleSubmit(onSubmit)}>
        <h4> Please Check Your Item for CheckOut</h4>    
        
        
                {
                  userinfos.map( us => <div>
                    <input className='ship-form-input'  name="Fullname" placeholder='Full Names'  value={us.name} {...register("FullName",{ required: true })} />

                  </div>)
                }
         <input className='ship-form-input'  name="email"  placeholder='email'  value={user.email} {...register("email", { required: true })} />
{errors.email && <span style={{color:'red'}}>Email is required</span>}
                <h5 style={{color:'blue'}}>Product Details</h5>
                  
                <div className='labelDesign'>
                  <label htmlFor="">Product Name</label> 
                <input className='ship-form-input'  name="pname"  value={name} {...register("pname")} />

                <br /><label htmlFor="">Product Price</label>

             <input className='ship-form-input'  name="pprice"  value={price}  {...register("pprice")} />

             <br /> <label htmlFor="">Product Quantity</label>

             <input className='ship-form-input'  name="pquantity"  value={quantity} {...register("pquantity")} />
                </div>
         
               <input className='btnDesign' type="submit" value="Check"/>
               <br />
           
         
             </form>
             {
                <h2 style={{color:'green'}}>{success}</h2>
             }
                  
        
              </div>
            
           
        
    );
};

export default Shipping;