import React from 'react';
import { DivForm, DivSuccess, Image, SubtitleSuccess, Success } from './DistributorAccessElements';
import Export from './../../img/export.png';

export default function FormSuccess() {
    return (
        <DivForm>
            <SubtitleSuccess>Hemos recibido tu correo</SubtitleSuccess>
            <Success>Agradecemos tu interés en querer formar parte de nuestro equipo</Success>
            <DivSuccess>
                <Image src={Export} alt={'euccess'} />
            </DivSuccess>
        </DivForm>
    );
}