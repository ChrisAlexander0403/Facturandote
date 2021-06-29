import React, { useState } from 'react';
import {
    FormContainer, InfoForm, Subtitle, SubtitleLightning, TextInfo,
    Mail, Phone, Location, Global
} from './ContactElements';
import { Body, Container, Title, Span } from '../header/Header';
import Form from './Form';
import FormSuccess from './FormSuccess'
import axios from 'axios';

export default function ContactComponent() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    async function submitForm(values) {
        await axios.post('http://localhost:8000/api/mails/contact', {
            name: values.name,
            email: values.email,
            phone: values.phone,
            content: values.Comment
        })
        setIsSubmitted(true);
    }
    return (
        <Body>
            <Container>
                <Title><Span>C</Span>ontáctanos</Title>
                <FormContainer>
                    {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
                    <InfoForm>
                        <Subtitle>Más Información</Subtitle>
                        <TextInfo><Location /><p>C.20 No.277 x23 y 23-A Col. Miguel Alemán, Mérida Yucatán.</p></TextInfo>
                        <TextInfo><Phone /><p>999-927-5000, 999-927-5002</p></TextInfo>
                        <TextInfo><Mail /><p>soporte@facturandote.com</p></TextInfo>
                        <TextInfo><Global /><p>facturandote.com</p></TextInfo>
                        <SubtitleLightning>Facturándote</SubtitleLightning>
                    </InfoForm>
                </FormContainer>
            </Container>
        </Body>
    );
}