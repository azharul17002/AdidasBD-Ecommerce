import React, { useEffect, useState } from 'react';
import BottleShow from '../BottleShow/BottleShow';


const Bottle = () => {
    const [products,setProducts]=useState([]);

    useEffect(() => {
        
    fetch(`http://localhost:5000/categories_bottle`)
    .then(res =>res.json())
    .then(data =>setProducts(data)
     )
    },[])


    return (
        <div>
            <div className="shop-container mt-5 ">
    
    <div className="products-container">
       {Array.isArray(products)? 
        products.map(product =><BottleShow
        key={product._id}   showAddtoCart={true} product={product}></BottleShow>)
        : null }
        
    </div>
    <div>
        </div>
            </div>
            </div>
    );
};

export default Bottle;