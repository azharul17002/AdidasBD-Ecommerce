import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ReviewItem = ({pd,handleRemoveItem}) => {
    const {_id,name,price,quantity,shipping,img}=pd;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p>${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping Cost:${shipping}</p>
                </div>
                <div className='delete-button'>
                    <button onClick={()=> handleRemoveItem(_id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
           
        </div>
    );
};

export default ReviewItem;