import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';


const ManageProducts = () => {
    const {user}=useContext(AuthContext);
    const [products,setProducts]=useState([]);

    useEffect(() => {
        const email=user.email;
    fetch(`http://localhost:5000/addproducts?email=${email}`)
    .then(res =>res.json())
    .then(data =>setProducts(data))
     
    },[])
    
    const handleDelete=(id)=>{
        const process=window.confirm('Are you sure to delete??');
        if(process)
        {
           const url=`http://localhost:5000/addproducts/${id}`;
          fetch(url,{
             method:'delete'
        })
        .then(res =>res.json())
        .then(data => {
           console.log(data);
           const remaining = products.filter(pd => pd._id !== id)
           setProducts(remaining);
        })
          
        }
        else{
   
        }
   
   
       }





    return (
        <div>
             
           
            <div style={{marginTop:'54px',background:'grey',width:'820px',height:'600px',borderRadius:'10px'}}>
            <h5 style={{textAlign:'center',color:'white'}}>Your Product List:{products.length} </h5>
            <br />
            <div  style={{color:'blue', width:'800px',marginLeft:'5px',padding:'15px'}}>
            {
                products.map(pd => <div style={{border:'2px dotted white',margin:'5px'}} key={pd._id}> <h4>Name : {pd.productName} ; Price:{pd.price}; Category:{pd.category}; <img src={pd.imageUrl} alt="" style={{width:'80px',marginLeft:'30px',height:'80px'}}/>
                <button style={{color:'blue',marginLeft:'50px',fontSize:'15px',backgroundColor:'yellow',padding:'5px',width:'130px',border:'none',height:'30px'}} onClick={()=> handleDelete(pd._id)}>Delete</button></h4></div>)
            }
            </div>
            </div>
        </div>
    );
};

export default ManageProducts;