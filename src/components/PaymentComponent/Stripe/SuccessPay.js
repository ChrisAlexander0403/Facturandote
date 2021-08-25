import React from 'react';
import { DivForm, SubtitleSuccess, Success } from './PaymentElements';

export default function SuccessPay(){
    return(
        <DivForm>
            <SubtitleSuccess>Hemos recibido tu pago</SubtitleSuccess>
            <Success>Gracias por facturar con nosotros</Success>
        </DivForm>
    );
}