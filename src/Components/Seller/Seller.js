import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './Seller.css'

const Seller = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success,setSuccess]=useState();
    const onSubmit = data => {
        const url = `http://localhost:5000/seller`;
        fetch(url, {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
         
        })
          .then((res) => res.json())
          .then((result) => {
            setSuccess('Seller Approved Successfully');
            
           
          });
    }

    return (
        <div className="container shipment-design bgDesign ">

             

              <div>
               
               </div>

               <div className='formDesign formss'>
               <form className='ship-forms' onSubmit={handleSubmit(onSubmit)}>
        <h4  style={{color:'blue',fontSize:'20px',fontWeight:'700'}}> Create a seller Account</h4>    

        
              
                <input className='ship-form-input'  name="CompanyName" placeholder='Company Name'  {...register("companyName", { required: true })} />
               {errors.Address && <span style={{color:'red'}}>companyName is required</span>}
             
               <input className='ship-form-input'  name="sellerName"  placeholder='seller Name'  {...register("sellerName", { required: true })} />
               {errors.email && <span style={{color:'red'}}>sellerName is required</span>}
        
         
               <input className='ship-form-input'  name="phoneNumber" placeholder='phoneNumber'  {...register("phoneNumber", { required: true })} />
               {errors.phoneNumber && <span style={{color:'red'}}>phoneNumber is required</span>}
         
               
               <input className='ship-form-input'  name="shopAddress" placeholder='Shop Address'  {...register("shopAddress", { required: true })} />
               {errors.Address && <span style={{color:'red'}}>Shop Address is required</span>}

       

         
                <br />
               <input className='btnDesign' type="submit" />
               <br />
         
             </form>
             {
                <h2 style={{color:'green'}}>{success}</h2>
             }
                  
               </div>




         
        
              </div>
    );
};

export default Seller;