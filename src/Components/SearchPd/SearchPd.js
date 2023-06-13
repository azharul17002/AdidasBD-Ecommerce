import React from 'react';
import './SearchPd.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

const SearchPd = (props) => {
    const {name,img,seller,price,ratings}=props.pd;
    return (
           
        <div className='product'>
           
            <div class="child bounce">
            <img src={img} alt="" />
            <div className='p_details'>
              <p className='p_name'>{name}</p>
            <h4>price:${price}</h4>
            <p><small>Seller:{seller}</small></p>
             <p><small>Ratings: <small style={{color:'red',fontWeight:'800'}}>{ratings}</small> <FontAwesomeIcon style={{color:'yellowgreen'}} icon={faStar}></FontAwesomeIcon></small></p>
             
            </div>
            {<button  onClick={() => props.handleAddToCart(props.product)}  className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>}
          
           
     </div>
       
            
        </div>
    );
};

export default SearchPd;