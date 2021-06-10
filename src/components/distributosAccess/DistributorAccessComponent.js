import React from 'react';
import { FormContainer } from '../contactForm/ContactElements';
import {LogInDiv, SignUpForm, Subtitle, Info, Label, Input, Text, TextArea, SendInput, Button} from './DistributorAccessElements';
import {Body, Container, Title, Span} from '../header/Header';

export default function DistributorAccessComponent(){
    return(
        <Body>
            <Container>
                <Title><Span>A</Span>cceso a Distribuidores</Title>
                <FormContainer>
                    <SignUpForm>
                        <Subtitle>¿Quieres ser parte de nuestro equipo de Distribuidores?</Subtitle>
                        <Info>Mándanos tus datos y te contactaremos para que seas parte de nosotros.</Info>
                        <Text>
                            <Label>Empresa o Razón Social</Label>
                            <Input type={'text'} placeholder={'Empresa'}></Input>    
                        </Text>
                        <Text>
                            <Label>Dirección</Label>
                            <Input type={'text'} placeholder={'Dirección'}></Input>    
                        </Text>
                        <Text>
                            <Label>Municipio</Label>
                            <Input type={'text'} placeholder={'Municipio'}></Input>    
                        </Text>
                        <Text>
                            <Label>Estado</Label>
                            <Input type={'text'} placeholder={'Estado'}></Input>    
                        </Text>
                        <Text>
                            <Label>Teléfono</Label>
                            <Input type={'tel'} placeholder={'Teléfono'}></Input>    
                        </Text>
                        <Text>
                            <Label>Nombre de contacto</Label>
                            <Input type={'text'} placeholder={'Nombre'}></Input>    
                        </Text>
                        <Text>
                            <Label>Mensaje</Label>
                            <TextArea></TextArea>   
                        </Text>
                        <SendInput/>
                    </SignUpForm>
                    <LogInDiv>
                        <Subtitle>¿Ya eres Distribuidor?</Subtitle>
                        <Button></Button>
                    </LogInDiv>
                </FormContainer>
            </Container>
        </Body>
    );
}