import React, { useEffect, useRef, useState } from 'react';
import { Button, Controllers, DivText, Image, LeftArrow, Main, RightArrow, Slide, SlideShow, Text } from './SliderElements';

import distribuidor from './../../img/distribuidor.png';
import paquetesBasicos from './../../img/paquetesBasicos.png';
import folios from './../../img/folios.png';

const Slider = (props) => {
    const slideShow = useRef(null);
    const intervalSlideShow = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const [animationID, setAnimationID] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        slideShow.current.addEventListener('dragstart', (e) => e.preventDefault());

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

    const slides = Array.from(document.querySelectorAll('.slide'));

    slides.forEach((slide, index) => {
        slide.addEventListener('touchstart', touchStart(index));
        slide.addEventListener('touchend', touchEnd);
        slide.addEventListener('touchmove', touchMove);

        slide.addEventListener('mousedown', touchStart(index));
        slide.addEventListener('mouseup', touchEnd);
        slide.addEventListener('mouseleave', touchEnd);
        slide.addEventListener('mousemove', touchMove);
    })

    const touchStart = (index) => {
        return (e) => {
            setCurrentIndex(index);
            setStartPosition(getPositionX(e));
            setIsDragging(true);
            setAnimationID(requestAnimationFrame(animation));
        }
    }

    const touchEnd = () => {
        setIsDragging(false);
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;
        if(movedBy < -100 && currentIndex < slides.length){
            setCurrentIndex(currentIndex + 1);
        }
        if(movedBy > 100 && currentIndex > 0){
            setCurrentIndex(currentIndex -1);
        }
        setPositionByIndex()
    }

    const touchMove = (e) => {
        if(isDragging){
            const currentPosition = getPositionX(e);
            setCurrentTranslate(prevTranslate + currentPosition - startPosition)
        }
    }

    const animation = () => {
        setSliderPosition()
        if(isDragging) requestAnimationFrame(animation);
    }

    const getPositionX = (e) => {
        return e.type.includes('mouse') 
            ? e.pageX 
            : e.touches[0].clientX;
    }

    const setSliderPosition = () => {
        slideShow.current.style.transform = `translateX(${currentTranslate}px)`;
    }

    const setPositionByIndex = () => {
        setCurrentTranslate(currentIndex * -window.innerWidth);
        setPrevTranslate(currentTranslate);
        setSliderPosition();
    }

    return (
        <Main width={props.width}>
            <SlideShow ref={slideShow}>
                <Slide className={'slide'}>

                        <Image src={distribuidor} alt={""}/>
  
                    {/* <DivText background={"rgba(0, 0, 0, .5)"}>
                        <Text color={"#fff"}>15% de descuento en productos apple</Text>
                    </DivText> */}
                </Slide>
                <Slide className={'slide'}>
                        <Image src={paquetesBasicos} alt={""}/>
                    
                    {/* <DivText>
                        <Text>15% de descuento en productos apple</Text>
                    </DivText> */}
                </Slide>
                <Slide className={'slide'}>

                        <Image src={folios} alt={""}/>
                    
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
