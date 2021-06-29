import React from 'react';
import PaymentComponent from '../components/PaymentComponent/PaymentComponent';
import { useParams } from 'react-router';

const Payment = () =>{
    const { id } = useParams();
    return(
        <PaymentComponent id={id}/>
    );
}

export default Payment;