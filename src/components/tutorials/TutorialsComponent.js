import React from 'react';
import { Link } from 'react-router-dom';
import { Body, Container, Title, Span } from '../header/Header';
import Accordeon from './Accordeon';
import { LinksContainer, DownloadButton, Button, Text, Download } from './TutorialsElements';
import catCFDI from '../../documents/catCFDI.xls';

export default function TutorialsComponent(){

    const openSAT = () => {
        window.open('http://pys.sat.gob.mx/PyS/catPyS.aspx', '_blank');
    }

    const videos = [
        {
            id: 1,
            title: "Configura tu plataforma",
            src: "https://www.youtube-nocookie.com/embed/wkfEvPRF8BQ"
        },
        {
            id: 2,
            title: "Agregar productos",
            src: "https://www.youtube-nocookie.com/embed/qLxncUurgjM"
        },
        {
            id: 3,
            title: "Agregar clientes",
            src: "https://www.youtube-nocookie.com/embed/Zykm6iEZbNs"
        },
        {
            id: 4,
            title: "Agregar sucursales",
            src: "https://www.youtube-nocookie.com/embed/_8bY0f3zGls"
        },
        {
            id: 5,
            title: "Agregar Logo",
            src: "https://www.youtube-nocookie.com/embed/XuaqIXNqkL0" 
        },
        {
            id: 6,
            title: "Agregar certificados",
            src: "https://www.youtube-nocookie.com/embed/8OGHJeHwBlg"
        },
        {
            id: 7,
            title: "Agregar un régimen fiscal",
            src: "https://www.youtube-nocookie.com/embed/xGAHd9rkdp4"
        },
        {
            id: 8,
            title: "Agregar una serie de folios",
            src: "https://www.youtube.com/embed/sWJoFC7Erbk"
        }
    ];

    return(
        <Body>
            <Container>
                <Title><Span>M</Span>anuales y Vídeos Tutoriales</Title>
                {videos.map((el) => {
                    return(
                        <Accordeon key={el.id} title={el.title} src={el.src}/>
                    );
                })}
                <LinksContainer>
                    <Link to='/Tutorials/Manual' style={{ textDecoration: 'none' }}>
                        <Button>
                            <Text>Descargar</Text>
                            <DownloadButton>
                                <Text className='inside'>Manual Facturandote</Text>
                                <Text className='inside down'>3.49MB</Text>
                            </DownloadButton>
                        </Button>
                    </Link>
                    <Download 
                        style={{ textDecoration: 'none' }}
                        href={catCFDI}
                        download='catCFDI.xls'
                    >
                        <Button>
                            <Text>Descargar</Text>
                            <DownloadButton>
                                <Text className='inside'>Catálogo CFDI</Text>
                                <Text className='inside down'>18.4MB</Text>
                            </DownloadButton>
                        </Button>
                    </Download>
                    <Button onClick={openSAT}>
                        <Text>Acceder</Text>
                        <DownloadButton>
                            <Text className='inside'>Catálogo de productos y servicios</Text>
                            <Text className='inside down'>SAT</Text>
                        </DownloadButton>
                    </Button>
                </LinksContainer>
            </Container>
        </Body>
    );
}