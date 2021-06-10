import React, {useState} from 'react';
import {FormContainer, InfoForm, Subtitle, SubtitleLightning, TextInfo, 
    Mail, Phone, Location, Global} from './ContactElements';
import {Body, Container, Title, Span} from '../header/Header';
import Form from './Form';
import FormSuccess from './FormSuccess'
import axios from 'axios';

export default function ContactComponent(){
    const [isSubmitted, setIsSubmitted] = useState(false)
    async function submitForm(values){
        setIsSubmitted(true);
        await axios.post('http://localhost:8000/api/mails', {
            name: values.name,
            email: values.email,
            phone: values.phone,
            content: values.Comment
        })
        
    }
    return(
        <Body>
            <Container>
                <Title><Span>C</Span>ontáctanos</Title>
                <FormContainer>
                    {!isSubmitted ? <Form submitForm={submitForm}/> : <FormSuccess/>}
                    <InfoForm>
                        <Subtitle>Más Información</Subtitle>
                        <TextInfo><Location/>C.22 No.277 x23 y 23a Col. Miguel Alemán</TextInfo>
                        <TextInfo><Phone/>999-927-5000,<br/> 999-927-5002</TextInfo>
                        <TextInfo><Mail/>soporte@facturandote.com</TextInfo>
                        <TextInfo><Global/>facturandote.com</TextInfo>
                        <SubtitleLightning>Facturándote</SubtitleLightning>
                    </InfoForm>
                </FormContainer>
            </Container>
        </Body>
    );
}