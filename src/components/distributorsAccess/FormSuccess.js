import React from 'react';
import { DivForm, DivSuccess, Image, SubtitleSuccess, Success } from './DistributorAccessElements';
import factura from './../../img/factura.png';

export default function FormSuccess() {
    return (
        <DivForm>
            <SubtitleSuccess>Hemos recibido tu correo</SubtitleSuccess>
            <Success>Gracias por facturar con nosotros.</Success>
            <DivSuccess>
                <Image src={factura} alt={'Success'} />
            </DivSuccess>
        </DivForm>
    );
}