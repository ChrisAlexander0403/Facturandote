import React, {useState} from 'react';
import {Slider as SliderComponent, Slide, GoLeft, GoRight, ImageComponent, ArrowLeft, ArrowRight} from './SliderElements';

export default function Slider(){

    let sliderArray = [
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80"
    ];
    const [x,setX] = useState(0);
    // const [y, setY] = useState(5000);
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100)
    };
    const goRight = () => {
        x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
    };
    setTimeout(() => {
        x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
    }, 5000);
    return(
        <SliderComponent>{
            sliderArray.map((item, index) =>{
                return(
                    <Slide key={index} style={{transform:`translateX(${x}%)`}}>
                        <ImageComponent src={item}/>
                    </Slide>
                );
            })}
            <GoLeft id="goLeft" onClick={goLeft}><ArrowLeft/></GoLeft>
            <GoRight id="goRight" onClick={goRight}><ArrowRight/></GoRight>
        </SliderComponent>
    );
}