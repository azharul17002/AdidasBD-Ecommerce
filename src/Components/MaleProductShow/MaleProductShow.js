import React from 'react';
import './MaleProductShow.css'

const MaleProductShow = (props) => {
    const {name,price,image,stock}=props.pd;
    return (
        <div className='product'>
        <div class="child bounce">
        <img src={image} alt="" />
        <div className='p_details'>
<p className='p_name'>{name}</p>
        <h4>price:${price}</h4>
         <h3>Stock : {stock}</h3>
         
        </div>
        </div>
        </div>
        
    );
};

export default MaleProductShow;