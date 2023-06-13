import React, { useContext, useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css'
import {addToDb, deleteShoppingCart, getStoredCart} from '../../utilities/fakedb'
import Banner from "../Banner/Banner";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Footer from './../Footer/Footer';
import { AuthContext } from './../Contexts/UserContext';

const Shop = () => {
    const[cart,setCart]=useState([]);
     const[count,setCount]=useState(0);
     const [products,setProducts]=useState([]);
     const [page,setPage]=useState(0);
     const [size,setSize]=useState(10);
    

     useEffect(() =>{
     const url = `http://localhost:5000/products?page=${page}&size=${size}`;
     fetch(url)
     .then(res => res.json())
     .then(data => {
        setCount(data.count);
        setProducts(data.products);
    })

     },[page,size])



     const pages=Math.ceil(count/size);
  
     const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();
     }

 


   useEffect(()=>{
   const storedCart=getStoredCart();
   const savedCart=[];
   const ids=Object.keys(storedCart);
   console.log(ids)
    fetch('http://localhost:5000/productsByIds',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(ids)
    })
    .then(res => res.json())
    .then(data => {

        for (const id in storedCart) { 
            const addedProduct =Array.isArray(data) ? data.find(product => product._id === id):0;

            if(addedProduct)
            {
               const quantity = storedCart[id];
               addedProduct.quantity =quantity;
              savedCart.push(addedProduct);
              
            }   
          }
    })

    setCart(savedCart);
   
   },[products]);


    const handleAddToCart =(selectedproduct)=>{
        alert('product added successfully')
        let newCart=[];
        const exists=cart.find(product => product._id===selectedproduct._id);
        if(!exists)
        {
            selectedproduct.quantity=1;
            newCart=[...cart,selectedproduct];
        }
        else
        {
            const rest=cart.filter(product =>product._id!==selectedproduct._id);
            exists.quantity=exists.quantity + 1;
            newCart=[...rest,exists];
        }
        
        setCart(newCart);
        addToDb(selectedproduct._id)
        }
    return (
        <div>
            <Banner></Banner>

<div className="shop-container mt-5 ">
    
            <div className="products-container">
               {Array.isArray(products)? 
                products.map(product =><Product
                key={product._id} handleAddToCart={handleAddToCart}  showAddtoCart={true} product={product}></Product>)
                : null }
                
            </div>
            <div>
                <Cart  clearCart={clearCart} cart={cart} showAddtoCart={true} >

                    <Link style={{textDecoration:'none'}} to="orderReview" className='review-link'>
                        {
                            <button >Review Order <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
                        }
                       
                    </Link>
                 
                  
                </Cart>
            </div>



            <div className="pagenation">
                <p className="crntPage">Current Page : <span className="page">{page}</span> and  Size<span className="page"> {size}</span></p>
                {
                    [...Array(pages).keys()].map(number =>
                        <button key={number}
                        className={page === number && 'selected'}
                        onClick={()=> setPage(number)}
                        >
                            {number}
                             </button>
                    )
                }
                <select onChange={event => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>

<Footer></Footer>
        </div>
    );
};

export default Shop;
