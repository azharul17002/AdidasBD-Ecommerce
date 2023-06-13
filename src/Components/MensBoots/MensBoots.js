import React, { useEffect, useState } from 'react';
import BootShow from '../BootShow/BootShow';

const MensBoots = () => {
    const [products,setProducts]=useState([]);

    useEffect(() => {
        
    fetch(`http://localhost:5000/categories_mansbots`)
    .then(res =>res.json())
    .then(data =>setProducts(data)
     )
    },[])


    return (
        <div>
            <div className="shop-container mt-5 ">
    
    <div className="products-container">
       {Array.isArray(products)? 
        products.map(product =><BootShow
        key={product._id}   showAddtoCart={true} product={product}></BootShow>)
        : null }
        
    </div>
    <div>
        </div>
            </div>
            </div>
    );
};

export default MensBoots;