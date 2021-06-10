import React, { useState } from 'react';
import {Buy, Div, Info, InnerDiv, Name, Price, MainContainer, Container, LeftArrow, RightArrow} from './ProductSliderElements';

export default function ProductSliderComponent({slides}){
    const length = slides.length;
    const [x,setX] = useState((360*(length - 1))/2);

    const goLeft = () => {
        setX(x + 360);
    };
    const goRight = () => {
        setX(x - 360);
    };

    return(
        <MainContainer>
            {x === (360*(length - 1))/2 ?  <LeftArrow onClick={goLeft} style={{visibility:`hidden`}}/> : (<LeftArrow onClick={goLeft}/>)}
            <Container>
                {slides.map((slide,index) => {
                    return(
                        <Div key={index} style={{transform:`translateX(${x}px)`}}>
                            <InnerDiv>
                                <Price>{slide.price}</Price>
                                <Name>{slide.name}</Name>
                                <Info>{slide.content}<br/><br/>Precio por unidad: {slide.unityPrice}</Info>
                                <Buy/>
                            </InnerDiv>
                        </Div>
                    );
                })}
            </Container>
            {x === (((360*(length - 1))/2) - (360 * (length - 1))) ? <RightArrow onClick={goRight} style={{visibility:`hidden`}}/> : (<RightArrow onClick={goRight}/>)}
        </MainContainer>
    );
}