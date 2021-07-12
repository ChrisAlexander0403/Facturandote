import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const Main = styled.main`
    position: relative;
    max-width: ${props => props.width || '1000px'};
    margin: auto;
    overflow: hidden;
`;

export const Title = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const SlideShow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const Slide = styled.div`
    position: relative;
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 1;
    max-height: 500px;
`;

export const Image = styled.img`
    width: 100%;
    vertical-align: top;
`;

export const DivText = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
    background: ${props => props.background ? props.background : 'rgba(0, 0, 0, .5)'};
    @media screen and (max-width: 768px){
        position: relative;
        background: #000;
    }
`;

export const Text = styled.p`
    padding: 0;
    margin: 0;
    color: ${props => props.color ? props.color : '#fff'};
    font-size: 16px;
`;

export const Controllers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:0;
    z-index: 2;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Arrow = css`
    color: #fff;
    width: 30px;
    height: 30px;
    filter: drop-shadow(-3px 0px 0px #00000070);
    transition: transform .1s linear;
    &:active{
        transform: translateY(3px);
    }
`;

export const LeftArrow = styled(IoIosArrowBack)`
    ${Arrow}
`;

export const RightArrow = styled(IoIosArrowForward)`
    ${Arrow}
`;

export const Button = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    cursor: pointer;
    transition: all .3 ease;
    &:hover{
        background: rgba(0,0,0,.2);
    }
`;