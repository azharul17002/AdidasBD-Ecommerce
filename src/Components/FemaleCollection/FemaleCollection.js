
import React from 'react';
import { useState, useEffect } from 'react';

import FemaleProductShow from '../FemaleProductShow/FemaleProductShow';

const FemaleCollection = () => {

    const [product,setPrduct]=useState([])

    useEffect(() => {
        
    fetch(`http://localhost:5000/femalecollection`)
    .then(res =>res.json())
    .then(data =>setPrduct(data)
     )
    },[])


    return (
       <div>
        <p style={{textAlign:'center',color:'blue',fontSize:'20px'}}>Available Product : {product.length}</p>
         <div className="products-container">
            
           
            {
                product.map(pd => <FemaleProductShow pd={pd}></FemaleProductShow>)
            }
            
        </div>
       </div>
    );
};

export default FemaleCollection;