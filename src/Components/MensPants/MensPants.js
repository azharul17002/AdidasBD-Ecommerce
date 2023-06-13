import React, { useEffect, useState } from 'react';
import './MensPants.css'
import PantShow from '../PantShow/PantShow';

const MensPants = () => {
    const [products,setProducts]=useState([]);

    useEffect(() => {
        
    fetch(`http://localhost:5000/categories_manspants`)
    .then(res =>res.json())
    .then(data =>setProducts(data)
     )
    },[])


    return (
        <div>
            <div className="shop-container mt-5 ">
    
    <div className="products-container">
       {Array.isArray(products)? 
        products.map(product =><PantShow
        key={product._id}   showAddtoCart={true} product={product}></PantShow>)
        : null }
        
    </div>
    <div>
        </div>
            </div>
            </div>
        
    );

};

export default MensPants;