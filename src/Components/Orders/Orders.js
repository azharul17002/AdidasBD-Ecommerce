import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import './Orders.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Shipping from '../Shipping/Shipping';


const Orders = () => {
    const {products,initialCart}=useLoaderData();
    const [cart,setCart]=useState(initialCart);

    const handleRemoveItem = (id)=>{
        const remainingItem=cart.filter(pd => pd._id !== id);
        setCart(remainingItem);
        removeFromDb(id);
    }
      
    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();
     }

    return (
        <div className="shop-container">
            <div className="orders-container">
                     {
                        cart.map(pd => <ReviewItem
                        key={pd._id} pd={pd} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                     }
                      <hr className='hr-design'/>
                    {
                       cart.map(pd => <Shipping
                        key={pd._id} pd={pd} handleRemoveItem={handleRemoveItem}></Shipping>)
                    }
                     
                     <div style={{textAlign:'center',marginTop:'50px'}}>
                     {
                        cart.length === 0 && <h2>No Items for Review.Please <Link  to="/">shop more</Link></h2>
                     }
                     </div>
    
            </div>
            
            <div>
           
              <Cart clearCart={clearCart} cart={cart}>
                     <Link to='/shipping' style={{textDecoration:'none'}}>
                     <button className='clear-btn'> checkout <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
                    
                     </Link>


              </Cart>
            </div>
        </div>
    );
};

export default Orders;