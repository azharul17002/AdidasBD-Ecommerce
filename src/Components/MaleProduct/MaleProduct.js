import React, { useEffect, useState } from 'react';
import MaleProductShow from '../MaleProductShow/MaleProductShow';

const MaleProduct = () => {
    const [product,setPrduct]=useState([])

    useEffect(() => {
        
    fetch(`http://localhost:5000/malecollection`)
    .then(res =>res.json())
    .then(data =>setPrduct(data)
     )
    },[])
    return (
        <div>
            <p style={{textAlign:'center',color:'blue',fontSize:'20px'}}>Available Product : {product.length}</p>
         <div className="products-container">
            
           
            {
                product.map(pd => <MaleProductShow pd={pd}></MaleProductShow>)
            }
            
        </div>
        </div>
    );
};

export default MaleProduct;