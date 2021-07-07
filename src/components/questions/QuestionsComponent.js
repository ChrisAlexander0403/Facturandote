import React from 'react';
import { Body, Container, Title, Span } from '../header/Header';
import Accordeon from './Accordeon';
import { DivQuestions, Subtitle} from './QuestionsElements';
import data from './data.json';

export default function QuestionsComponent(){
    return(
        <Body>
            <Container>
                <Title><Span>P</Span>reguntas Frecuentes</Title>
                <DivQuestions>
                    <Subtitle>Resuelve algunas de las dudas frecuentes sobre la facturación electrónica</Subtitle>
                    {data.map((el, index) => {
                        return(
                            <div key={index}>
                            <Accordeon question={el.question} answer={el.answer} />
                        </div>
                        );
                    })}
                </DivQuestions>
            </Container>
        </Body>
    );
}