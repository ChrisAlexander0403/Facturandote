import React from 'react';
import {GlobalContainer, Container, TitleContainer, Title, Content, Image} from './GuideElements';
import Videos from '../../img/videos.jpg';
import Preguntas from '../../img/preguntas.png';
import Capacitacion from '../../img/capacitacion.jpg';

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
                    <Title>
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
                    <Title>
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
                    <Title>
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