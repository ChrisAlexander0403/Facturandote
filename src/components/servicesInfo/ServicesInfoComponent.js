// import react, {useState, useEffect} from 'react';
// import axios from 'axios';
import {Body, Container, Title, Span} from '../header/Header';
import ProductSliderComponent from '../productSlider/ProductSliderComponent';
import data from './../productSlider/ProductSliderData.json';
import { Text, Span as Facturandote, List, Products, ListItem } from './ServicesInfoElements';

export default function ServicesInfoComponent(){
    // const [emision, setEmision] = useState([]);
    // const [timbrado, setTimbrado] = useState([]);
    // useEffect( async () => {
    //     const res = await axios.get('http://localhost:8000/api/products/search/emision')
    //     const res2 = await axios.get('http://localhost:8000/api/products/search/timbrado')
    //     setEmision(res.data);
    //     setTimbrado(res2.data);
    // }, []);
    // console.log(emision)
    return(
        <Body>
            <Container>
                <Title><Span>S</Span>ervicios</Title>
                <Text>En <Facturandote>Facturandote</Facturandote> contamos con distintas herramientas para la facturación, 
                    que permite administrar y emitir comprobantes fiscales con todos los 
                    aspectos requeridos por el SAT.<br/></Text>
                <List>
                    <ListItem>Emisión</ListItem>
                    <ListItem>Timbrado</ListItem>
                </List>
                <Products>Precios en Paquetes de Emisión</Products>
                <ProductSliderComponent slides={data.emision}/>
                <Products>Precios en Paquetes de Timbrado</Products>
                <ProductSliderComponent slides={data.timbrado}/>
                <Text>Portal web que no requiere de un ERP.</Text>
                <Text>Conector<br/><br/>Solución especialmente diseñada para empresas que buscan generar y timbrar sus CFDIs sin modificar su sistema actual, y sin la necesidad de conectarse vía Web Service.</Text>
                <Text>Web Service<br/><br/>La solución consiste en ofrecer el servicio de certificación o timbrado de CFDIs a través de una conexión vía web service (SOAP). Esta solución está especialmente diseñada para empresas que cuentan con la capacidad de consumir un web service (SOAP) y generar su CFDI en el estándar requerido por el SAT.</Text>
            </Container>
        </Body>
    );
}