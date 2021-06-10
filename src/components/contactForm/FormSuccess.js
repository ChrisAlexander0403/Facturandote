import React from 'react';
import { DivForm, DivSuccess, Image, Subtitle, Success } from './ContactElements';
import factura from './../../img/factura.png';

export default function FormSuccess(){
    return(
        <DivForm>
            <Subtitle>Hemos recibido tu correo</Subtitle>
            <Success>Gracias por facturar con nosotros.</Success>
            <DivSuccess>
                <Image src={factura} alt={'Success'}/>
            </DivSuccess>
        </DivForm>
    );
}