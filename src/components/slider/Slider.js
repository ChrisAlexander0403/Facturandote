import React, {useState} from 'react';
import {Slider as SliderComponent, Slide, GoLeft, GoRight, ImageComponent, ArrowLeft, ArrowRight} from './SliderElements';
import distribuidor from './../../img/distribuidor.png';
import paquetesBasicos from './../../img/paquetesBasicos.png';
import folios from './../../img/folios.png';

export default function Slider(){

    let sliderArray = [
        distribuidor,
        paquetesBasicos,
        folios
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
    }, 10000);
    return(
        <SliderComponent>{
            sliderArray.map((item, index) =>{
                return(
                    <Slide key={index} style={{transform:`translateX(${x}%)`}}>
                        <ImageComponent src={item}/>
                    </Slide>
                );
            })}
            {/* <GoLeft id="goLeft" onClick={goLeft}><ArrowLeft/></GoLeft>
            <GoRight id="goRight" onClick={goRight}><ArrowRight/></GoRight> */}
        </SliderComponent>
    );
}