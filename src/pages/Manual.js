import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Body, Container } from '../components/header/Header';
import ManualFacturandote from '../documents/manualFacturandote.pdf';

const Manual = () => {

    useEffect(() => {
        if(typeof window.orientation !== 'undefined'){
            document.getElementById('downloadLink').click();
        }
    }, []);

    return (
        <Body>
            <Container>
                <div style={{ width: '100%', height: '100vh' }}>
                    <object
                        data={ManualFacturandote}
                        type='application/pdf'
                        width= '100%'
                        height= '100%'
                    >
                        <br/>
                        <Download
                            href={ManualFacturandote}
                            id='downloadLink'
                            download='manualFacturandote.pdf'
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

export default Manual;