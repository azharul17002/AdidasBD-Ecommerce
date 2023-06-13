import React, { useEffect, useState } from 'react';
import BagShow from '../BagShow/BagShow';

const Bag = () => {
    const [products,setProducts]=useState([]);

    useEffect(() => {
        
    fetch(`http://localhost:5000/categories_bag`)
    .then(res =>res.json())
    .then(data =>setProducts(data)
     )
    },[])


    return (
        <div>
            <div className="shop-container mt-5 ">
    
    <div className="products-container">
       {Array.isArray(products)? 
        products.map(product =><BagShow
        key={product._id}   showAddtoCart={true} product={product}></BagShow>)
        : null }
        
    </div>
    <div>
        </div>
            </div>
            </div>
    );
};

export default Bag;