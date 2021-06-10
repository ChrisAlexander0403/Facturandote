import React from 'react';
import {ContentGrid, MainContent, Content, 
    Subtitle, Image, Extra, ExtraTitle, ExtraContent, DivValores, 
    Text} from './AboutElements';
import {Body, Container, Title, Span} from '../header/Header';
import Mision from '../../img/mision.png';

export default function AboutContainer(){
    return(
        <Body>
            <Container>
                <Title>¿<Span>Q</Span>uiénes Somos?</Title>
                <ContentGrid>
                    <MainContent>
                        <Content>Hemos experimentado el placer de abrazar al cambio y 
                            convertirlo en un gran éxito lo cual repercute con cada uno de 
                            nuestros clientes y distribuidores. Permítenos ir de la mano 
                            contigo en esta transición que a veces se torna difícil. Danos la 
                            oportunidad de aplicar toda nuestra experiencia y todos nuestros 
                            recursos para poder obtener tu total satisfacción.</Content>
                        <Subtitle>Misión</Subtitle>
                        <Content>Solucionar las necesidades en Facturación Electrónica 
                            el mejor servicio con los mejores precios y la mejor cobertura 
                            empresarial en todo el territorio nacional.</Content>
                        <Subtitle>Visión</Subtitle>
                        <Content>Ser líder en asesoría en facturación electrónica a nivel Nacional.</Content>
                        <Subtitle>Valores</Subtitle>
                        <DivValores>
                            <Text>Honestidad</Text>
                            <Text>Liderazgo</Text>
                            <Text>Trabajo en Equipo</Text>
                            <Text>Iniciativa</Text>
                            <Text>Compromiso</Text>
                        </DivValores>
                    </MainContent>
                    
                    <ExtraContent>
                        <Image src={Mision}></Image>
                        <ExtraTitle>Servicios que se ofrecen</ExtraTitle>
                        <Extra>Seguridad</Extra>
                        <Extra>Resguardo</Extra>
                        <Extra>Validación</Extra>
                        <Extra>Emisión</Extra>
                        <Extra>Timbrado</Extra>
                    </ExtraContent>
                </ContentGrid>
            </Container>
        </Body>
    );
}