import React, { useState } from 'react';
import { FormContainer } from '../contactForm/ContactElements';
import { LogInDiv, Subtitle, Button } from './DistributorAccessElements';
import { Body, Container, Title, Span } from '../header/Header';
import Form from './Form';
import FormSuccess from './FormSuccess';
import axios from 'axios';

export default function DistributorAccessComponent() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    async function submitForm(values) {
        await axios.post('http://localhost:8000/api/mails/distributor', {
            enterprise: values.enterprise,
            address: values.address,
            city: values.city,
            state: values.state,
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message
        })
        setIsSubmitted(true);
    }
    const abrirPortal = () => {
        window.open("http://facturandote.com/timfac/view/loguin/liguin.php", "_blank");
    }
    return (
        <Body>
            <Container>
                <Title><Span>A</Span>cceso a Distribuidores</Title>
                <FormContainer>
                    {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
                    <LogInDiv>
                        <Subtitle>¿Ya eres Distribuidor?</Subtitle>
                        <Button onClick={abrirPortal}></Button>
                    </LogInDiv>
                </FormContainer>
            </Container>
        </Body>
    );
}