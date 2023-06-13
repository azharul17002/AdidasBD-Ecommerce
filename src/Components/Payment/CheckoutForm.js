import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import './Design.css'
import UserContext, { AuthContext } from '../Contexts/UserContext';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]=useState('');

   const [success,setSucess]=useState('')
  
  


    
  const handleSubmit = async (event) => {
  
    event.preventDefault();

 




    if (!stripe || !elements) {
     
        return;
      }

          const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }



    const {error,payment} = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

   
   
    if (error) {
      
      setError(error.message)
    } else {
      setSucess('Payment Confirm')
      setError('')
      
      // Send the payment method ID to your server for further processing
      //const paymentMethodId = payment.paymentMethod.id;
  
    }
  };


    return (
       <>
        <form onSubmit={handleSubmit} style={{marginLeft:'15px'}}>
       
        <CardElement />
        <br />
        <button type="submit" className="pay-button">Pay</button>
        <p style={{color:'green'}}>{success}</p>
        <h5 style={{color:'red'}}>{error}</h5>
      </form>
       </>
    );
};

export default CheckoutForm;