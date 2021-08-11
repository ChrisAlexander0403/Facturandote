import React from 'react';
import styled from 'styled-components';
import { Body, Container } from '../components/header/Header';
import catCFDI from '../documents/catCFDI.xls'

const CFDI = () => {
    return (
        <Body>
            <Container>
                <div style={{ width: '100%', height: '100vh' }}>
                    <object
                        data={catCFDI}
                        type='application/pdf'
                        width= '100%'
                        height= '100%'
                    >
                        <br/>
                        <Download
                            href={catCFDI}
                            id='downloadLink'
                            download='catCFDI.xls'
                        >
                            Si la descarga no se inició automáticamente, haz click aquí para descargar.
                        </Download>
                    </object>
                </div>
            </Container>
        </Body>
    );
}

const Download = styled.a`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover{
        color: #ffef00;
    }
`;

export default CFDI;