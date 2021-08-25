import React, { useState } from 'react';
import { Div } from './PaymentElements';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { Body, Container, Title, Span } from '../header/Header';
import DetailsForm from './DetailsForm';
import SuccessPay from './SuccessPay';
import axios from 'axios';

export default function PaymentComponent({ id }) {
    const stripePromise = loadStripe(
        "pk_test_51JQah1JQogaIBfeRsXYDtQd6f57E87W8eu33AA7Eg62LkG6stlsX9zIc4298EqIDYwo5VrHAuItb1djCACL3ACq1002FHmZ9rI"
    );
    const [payment, setPayment] = useState('1');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const submitForm = async (values, error, paymentMethod, cardElement) => {
        if(payment === '1'){
            setLoading(true);
            if(!error){
                const { id } = paymentMethod;
                try{
                    const { data } = await axios.post('http://localhost:8000/api/buys', {
                        id,
                        amount: values.price,
                        description: values.product,
                        email: values.email
                    });
                    setResponse(data.message);
                    console.log(data);
                }catch(err){
                    console.log(err);
                }
                try{
                    if(response === "Successful payment"){
                        await axios.post('http://localhost:8000/api/mails/cardPaymentSucceeded', {
                            name: values.name,
                            phone: values.phone,
                            rfc: values.rfc,
                            email: values.email,
                            reason: values.reason,
                            cfdi: values.cfdi,
                            price: values.price,
                            product: values.product
                        });
                        setIsSubmitted(true);
                        cardElement.clear();
                    }
                }catch(err){

                }
            }
            setLoading(false);
        }else if(payment === '2'){
            try {
                const formData = new FormData();
                formData.append('file', values.file[0])
                setLoading(true);
                const uploadRes = await axios.post('http://localhost:8000/api/mails/uploadVoucher', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(uploadRes.data);
                await axios.post('http://localhost:8000/api/mails/depositPaymentSucceeded', {
                    name: values.name,
                    phone: values.phone,
                    rfc: values.rfc,
                    email: values.email,
                    reason: values.reason,
                    cfdi: values.cfdi,
                    price: values.price,
                    product: values.product,
                    filename: uploadRes.data.filename,
                    uploadPath: uploadRes.data.uploadPath
                });
                setLoading(false);
                setIsSubmitted(true);
            } catch (error) {
                console.log(error);
            }
        }
        setLoading(false);  
    }

    return (
        <Body>
            <Container>
                <Title><Span>R</Span>ealizar Compra</Title>
                {!isSubmitted ?
                    <Div>
                        <DetailsForm id={id} payment={payment} />
                        <Elements stripe={stripePromise}>
                            <CheckoutForm 
                                id={id} 
                                submitForm={submitForm} 
                                loading={loading} 
                                payment={payment} 
                                setPayment={setPayment}
                                response={response}
                            />
                        </Elements>
                    </Div>
                    : <SuccessPay />
                }
            </Container>
        </Body>
    );
}