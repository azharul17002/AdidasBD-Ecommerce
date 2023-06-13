import React, { useEffect, useState } from 'react';
import MenshoeShow from '../MenshoeShow/MenshoeShow';
import './MensShoes.css'

const MensShoes = () => {
    const [products,setProducts]=useState([]);

    useEffect(() => {
        
    fetch(`http://localhost:5000/categories_mansshoes`)
    .then(res =>res.json())
    .then(data =>setProducts(data)
     )
    },[])


    return (
        <div>
            <div className="shop-container mt-5 ">
    
    <div className="products-container">
       {Array.isArray(products)? 
        products.map(product =><MenshoeShow
        key={product._id}   showAddtoCart={true} product={product}></MenshoeShow>)
        : null }
        
    </div>
    <div>
        </div>
            </div>
            </div>
        
    );
};

export default MensShoes;