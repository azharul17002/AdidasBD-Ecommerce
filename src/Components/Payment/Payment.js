import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51IeJs3IsGe0VEPFzxt2wG197P3Q0AkuXm62jvGs4Z33wSKkb8YPpYEIqoUxwsd4QsqSULVfTEcUUzam8ceFc3min00TTRgfGBx');
const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
    </Elements>
    );
};

export default Payment;