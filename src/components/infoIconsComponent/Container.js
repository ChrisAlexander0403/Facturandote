import React from 'react';
import {Options, OptionsContainer, Squares, Span, Name} from './ContainerElements';
import {FaMixcloud} from 'react-icons/fa';
import {BiHdd} from 'react-icons/bi';
import {BsCheckAll} from 'react-icons/bs';
import {BiLockAlt} from 'react-icons/bi';
import {FiBell} from 'react-icons/fi';

export default function Container(){
    return(
        <Options>
            <OptionsContainer>
                <Squares>
                    <Name><Span><BiLockAlt/></Span><br/>Seguridad</Name>
                </Squares>
                <Squares>
                    <Name><Span><BiHdd/></Span><br/>Resguardo</Name>
                </Squares> 
                <Squares>
                    <Name><Span><BsCheckAll/></Span><br/>Validación</Name>
                </Squares> 
                <Squares>
                    <Name><Span><FaMixcloud/></Span><br/>Emisión</Name>
                </Squares>   
                <Squares>
                    <Name><Span><FiBell/></Span><br/>Timbrado</Name>
                </Squares>
            </OptionsContainer>
        </Options>
    );
}