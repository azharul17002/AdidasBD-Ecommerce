import React, { useEffect, useState } from 'react';
import './Cap.css'
import CapShow from '../CapShow/CapShow';

const Cap = () => {
    const [products,setProducts]=useState([]);

    useEffect(() => {
        
    fetch(`http://localhost:5000/categories_cap`)
    .then(res =>res.json())
    .then(data =>setProducts(data)
     )
    },[])


    return (
        <div>
            <div className="shop-container mt-5 ">
    
    <div className="products-container">
       {Array.isArray(products)? 
        products.map(product =><CapShow
        key={product._id}   showAddtoCart={true} product={product}></CapShow>)
        : null }
        
    </div>
    <div>
        </div>
            </div>
            </div>
    );
};

export default Cap;