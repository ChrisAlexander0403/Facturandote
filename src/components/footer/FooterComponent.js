import React from 'react';
import {Link} from './FooterElements';
import { Contact, Container, FooterInformation, Description, FooterEnd, Text, Title, Image, Mail, Phone, Location } from './FooterElements';
import Logo from '../../FacturandoteLogo.png'

export default function FooterComponent(){
    return(
        <Container>
            <FooterInformation>
                <Contact>
                    <Title>Contacto</Title>
                    <Text><Mail/>Correo: soporte@facturando.com</Text>
                    <Text><Phone/>Teléfonos: 999-927-5000, 999-927-5002</Text>
                    <Text><Location/>Dirección: C.22 No.277 x23 y 23a Col. Miguel Alemán</Text>
                </Contact>
                <Description>
                    <Image src={Logo}/>
                    <Text>Buen servicio con los mejores precios y gran cobertura en todo el territorio nacional.</Text>
                </Description>
            </FooterInformation>
            <FooterEnd>
                <Link to="/Home">Inicio</Link> | <Link to="/About">¿Quienes Somos?</Link> | <Link to="/Services">Servicios</Link> | <Link to="/Contact">Contacto</Link> | <Link to="/DistributorAccess">Distribuidores</Link>
            </FooterEnd>
        </Container>
    );
}