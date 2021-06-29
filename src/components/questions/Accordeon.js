import React, { useState, useRef } from 'react';
import { Answer, ArrowDown, Question, P, Q, ArrowBack } from './QuestionsElements';

export default function Accordeon({question, answer}){
    const [collapsible, setCollapsible] = useState(false);
    const [height, setHeight] = useState("0px")
    const Toggle = () => {
        setCollapsible(!collapsible);
        setHeight(collapsible ? "0px" : `${content.current.scrollHeight}px`);
    }
    const content = useRef(null);
    return(
        <>
            <Question 
                onClick={Toggle} 
                style={{background: `${collapsible ? "#222" : "#181818"}`}}
            >
                <Q>{question}</Q>{collapsible ? <ArrowDown/> : <ArrowBack/>}
            </Question>
            <Answer 
                ref={content}
                CSS={collapsible ? "auto" : "0px"} 
                style={{height: `${height}`, transition: "height 0.5s ease-in-out"}}
            >
                <P>{answer}</P>
            </Answer>
        </>
    );
}