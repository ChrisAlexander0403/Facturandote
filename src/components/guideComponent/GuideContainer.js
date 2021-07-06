import React from 'react';
import {GlobalContainer, Container, TitleContainer, Title, Content, Image} from './GuideElements';
import Videos from './../../img/videos.png';
import Preguntas from './../../img/preguntas.jpg';
import Capacitacion from './../../img/capacitacion.png';

export default function GuideContainer(){
    const TitleContainerProps = {
        Desk: 'polygon(100% 0, 100% 100%, 19% 100%, 0% 62%, 27% 0)',
        Mobile: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
        Flex: 'flex-end',
        Align: 'end'
    };
    return(
        <GlobalContainer>
            <Container>
                <TitleContainer>
                    <Title to="/">
                        Manuales y Videos Tutoriales
                    </Title>
                    <Content>
                        Material de ayuda para nuestros clientes que acceden al portal de facturandote.
                    </Content>
                </TitleContainer>
                <Image src={Videos}/>
            </Container>
            <Container direction={'row-reverse'}>
                <TitleContainer 
                    clipPath={TitleContainerProps.Desk} 
                    clipPathMobile={TitleContainerProps.Mobile} 
                    Flex={TitleContainerProps.Flex}>
                    <Title to="/Contact">
                        Solicitar Capacitación
                    </Title>
                    <Content  Align={TitleContainerProps.Align}>
                        Contáctenos para recibir capacitación de parte de nuestro personal.
                    </Content>
                </TitleContainer>
                <Image src={Capacitacion}/>
            </Container>
            <Container>
                <TitleContainer>
                    <Title to="/Questions">
                        Preguntas Frecuentes
                    </Title>
                    <Content>
                        Resuelva algunas de sus dudas sobre algunos conceptos de facturación electrónica.
                    </Content>
                </TitleContainer>
                <Image src={Preguntas}/>
            </Container>
        </GlobalContainer>
    );
}