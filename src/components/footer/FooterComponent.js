import React from 'react';
import {Facebook, Twitter, Link, SocialMedia} from './FooterElements';
import { Contact, Container, FooterInformation, Description, FooterEnd, Text, Title, Image, Mail, Phone, Location } from './FooterElements';
import Logo from '../../FacturandoteLogo.png'

export default function FooterComponent(){
    const facebook = () => {
        window.open("https://www.facebook.com/Facturandote.mx", '_blank');
    }
    const twitter = () => {
        window.open("https://twitter.com/Facturandote_", '_blank');
    }
    return(
        <Container>
            <FooterInformation>
                <Description>
                    <Image src={Logo}/>
                    <Text>Buen servicio con los mejores precios y gran cobertura en todo el territorio nacional.</Text>
                    <SocialMedia>
                        <Facebook onClick={facebook}></Facebook>
                        <Twitter onClick={twitter}></Twitter>
                        <div 
                            style={{color: '#fff', 
                                margin: '5px 20px',
                                fontSize: '10px'}}
                        >
                            Icons made by 
                            <a 
                                style={{textDecoration:'none', color: '#ffef00'}} 
                                href="https://www.freepik.com" 
                                title="Freepik"
                            > Freepik </a> from 
                            <a 
                                style={{textDecoration:'none', color: '#ffef00'}} 
                                href="https://www.flaticon.com/" 
                                title="Flaticon"
                            > www.flaticon.com </a>
                        </div>
                    </SocialMedia>
                </Description>
                <Contact>
                    <Title>Contacto</Title>
                    <Text><Mail/><p>soporte@facturando.com</p></Text>
                    <Text><Phone/><p>999-927-5000, 999-927-5002</p></Text>
                    <Text><Location/><p>C.20 No.277 x23 y 23-A Col. Miguel Alemán, Mérida Yucatán, 97148.</p></Text>
                </Contact>
            </FooterInformation>
            <FooterEnd>
                <Link to="/Inicio">Inicio</Link> | <Link to="/About">¿Quienes Somos?</Link> | <Link to="/Services">Servicios</Link> | <Link to="/Contact">Contacto</Link> | <Link to="/DistributorAccess">Distribuidores</Link>
            </FooterEnd>
        </Container>
    );
}