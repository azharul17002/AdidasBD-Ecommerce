import React from 'react';
import './Mens.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons';

const MenshoeShow = (props) => {
    const {name,img,seller,price,ratings}=props.product;
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
           
          
           
     </div>
       
            
        </div>
    );
};

export default MenshoeShow;