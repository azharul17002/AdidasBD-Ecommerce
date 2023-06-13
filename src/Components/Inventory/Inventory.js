import React from 'react';
import './Inventory.css'
import { AuthContext } from '../Contexts/UserContext';
import { useContext } from 'react';
import Addproduct from '../Addproduct/Addproduct';
import { useState } from 'react';
import ManageProducts from '../ManageProducts/ManageProducts';
import Seller from './../Seller/Seller';
const Inventory = () => {
    const {user}=useContext(AuthContext);

    const[visible,setVisible]=useState(false);
    const[visibles,setVisibles]=useState(false);
    const[visibless,setVisibless]=useState(false);
    return (


        <div>
             <h2 className='bg-gray' style={{textAlign:'center'}}>Welcome to Your Inventory <span style={{color:'red'}}> {user.displayName}</span></h2>

              <div className='d-flex'>

                <div className="sideDesign linktomanage bg-dark">
                <button style={{display:'block',padding:'20px',color:'white',background:'black',width:'350px',
                    textDecoration:'none',fontSize:'20px'}} onClick={() => setVisible(!visible)}>{visible ? 'Hide ' : 'Show '}Add New Products</button>

                    <button style={{display:'block',padding:'20px',color:'white',background:'black',width:'350px',
                    textDecoration:'none',fontSize:'20px'}} onClick={() => setVisibles(!visibles)}>{visibles ? 'Hide ' : 'Show '}Manage Your Products</button>
                   
                   <button style={{display:'block',padding:'20px',color:'white',background:'black',width:'350px',
                    textDecoration:'none',fontSize:'20px'}} onClick={() => setVisibless(!visibless)}>{visibless ? 'Hide ' : 'Show '}Become a seller</button>
                   

                    
                    
                </div>

                <div className="main-section-design">
                {visible && <Addproduct></Addproduct> }
                    
                </div>

                <div className="main-section-designs">
                {visibles && <ManageProducts></ManageProducts> }
                </div>

                <div className="main-section-designss">
                {visibless && <Seller></Seller> }
                </div>


              </div>
          
           







        </div>
    );
};

export default Inventory;