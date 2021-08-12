import React from 'react';
import { DivForm, Subtitle, Success } from './ContactElements';

export default function FormSuccess(){
    return(
        <DivForm>
            <Subtitle>Hemos recibido tu correo</Subtitle>
            <Success>Gracias por facturar con nosotros.</Success>
        </DivForm>
    );
}