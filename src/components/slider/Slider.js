import React, { useEffect, useRef } from 'react';
import { Button, Controllers, DivText, Image, LeftArrow, Main, RightArrow, Slide, SlideShow, Text } from './SliderElements';

import distribuidor from './../../img/distribuidor.png';
import paquetesBasicos from './../../img/paquetesBasicos.png';
import folios from './../../img/folios.png';

const Slider = (props) => {
    const slideShow = useRef(null);
    const intervalSlideShow = useRef(null);

    useEffect(() => {
        intervalSlideShow.current = setInterval(() => {
            next();
        }, 5000);

        slideShow.current.addEventListener('mouseenter', () => {
            clearInterval(intervalSlideShow.current);
        });

        slideShow.current.addEventListener('mouseleave', () => {
            intervalSlideShow.current = setInterval(() => {
                next();
            }, 5000);
        });
        
        return () => clearInterval(intervalSlideShow.current);

    }, []);

    const next = () => {
        if(slideShow.current.children.length > 0){
            const firstElement = slideShow.current.children[0];
            const slideSize = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transition = `all 300ms ease-out`;

            slideShow.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                slideShow.current.style.transition = 'none';
                slideShow.current.style.transform = 'translateX(0)';

                slideShow.current.appendChild(firstElement);

                slideShow.current.removeEventListener('transitionend', transition)
            }

            slideShow.current.addEventListener('transitionend', transition);
        }
    }
    
    const prev = () => {
        if(slideShow.current.children.length > 0){
            const index = slideShow.current.children.length - 1;
            const lastElement = slideShow.current.children[index];
            const slideSize = slideShow.current.children[0].offsetWidth;

            slideShow.current.insertBefore(lastElement, slideShow.current.firstChild);
            slideShow.current.style.transition = 'none';
            slideShow.current.style.transform = `translateX(-${slideSize}px)`

            setTimeout(() => {
                slideShow.current.style.transition = `all 300ms ease-out`;
                slideShow.current.style.transform = `translateX(0)`;
            }, 30)
        }
    }
    

    return (
        <Main width={props.width}>
            <SlideShow ref={slideShow}>
                <Slide>
                    <a href="http://www.facebook.com">
                        <Image src={distribuidor} alt={""}/>
                    </a>
                    {/* <DivText background={"rgba(0, 0, 0, .5)"}>
                        <Text color={"#fff"}>15% de descuento en productos apple</Text>
                    </DivText> */}
                </Slide>
                <Slide>
                    <a href="http://www.facebook.com">
                        <Image src={paquetesBasicos} alt={""}/>
                    </a>
                    {/* <DivText>
                        <Text>15% de descuento en productos apple</Text>
                    </DivText> */}
                </Slide>
                <Slide>
                    <a href="http://www.facebook.com">
                        <Image src={folios} alt={""}/>
                    </a>
                    {/* <DivText>
                        <Text>15% de descuento en productos apple</Text>
                    </DivText> */}
                </Slide>
            </SlideShow>
            <Controllers>
                <Button onClick={prev}>
                    <LeftArrow/>
                </Button>
                <Button onClick={next}>
                    <RightArrow/>
                </Button>
            </Controllers>
        </Main>
    )
}

export default Slider;
