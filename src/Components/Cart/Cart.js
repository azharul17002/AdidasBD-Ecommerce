
import React from 'react';

import './Cart.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Cart = (props) => {
    const[carts,setCart]=useState([]);
    const {cart,children}=props;
    let total=0;
    let shipping=0;
    let quantity=0;

    for(const product of cart)
    {
        quantity=quantity+product.quantity;
        total=total+product.price * product.quantity;
        shipping=shipping+product.shipping;
    }
    const tax=parseFloat((total*0.1).toFixed(2));
    const grandTotal=total+shipping+tax;

    return (
        <div className="cart-container cart">
            <h4>Order summary </h4>
                <p>Selected Item:{quantity}</p>
                <p>Total Price: ${total} </p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            
            <div>
                
                     <Link style={{textDecoration:'none'}} to="orderReview" className='review-link'>
                     {
                        props.showAddtoCart &&<button >Review Order <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
                     }
                     
                     
                 </Link>
                 <Link style={{textDecoration:'none'}} to="/orderPlacesuccess" className='review-link'>
                     {
                        props.showAddtoCart ||<button >CheckOut <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
                     }
                     </Link>
                
                
            </div>
                
               
              
             
              
               
               
        </div>
    );
};
 
export default Cart;