import React, { useState } from 'react';
import { Div } from './PaymentElements';
import CheckoutForm from './CheckoutForm';
import { Body, Container, Title, Span } from '../header/Header';
import DetailsForm from './DetailsForm';
import SuccessPay from './SuccessPay';
import axios from 'axios';

export default function PaymentComponent({ id }) {
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    async function submitForm(values) {
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
            await axios.post('http://localhost:8000/api/mails/paymentSucceeded', {
                name: values.name,
                enterprise: values.enterprise,
                rfc: values.rfc,
                email: values.email,
                reason: values.reason,
                cfdi: values.cfdi,
                price: values.price,
                filename: uploadRes.data.filename,
                uploadPath: uploadRes.data.uploadPath
                // price: product.price
            });
            setLoading(false);
            setIsSubmitted(true);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);  
    }

    return (
        <Body>
            <Container>
                <Title><Span>R</Span>ealizar Compra</Title>
                {!isSubmitted ?
                    <Div>
                        <DetailsForm id={id} />
                        <CheckoutForm id={id} submitForm={submitForm} loading={loading}/>
                    </Div>
                    : <SuccessPay />
                }
            </Container>
        </Body>
    );
}