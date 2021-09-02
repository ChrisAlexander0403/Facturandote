import styled, { css, keyframes } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";

const rotate = keyframes`
    100%{
        transform: rotate(-360deg);
    }
`;

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
    max-height: 550px;
`;

export const Image = styled.img`
    width: 100%;
    vertical-align: top;
    /* user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none; */
`;

export const Div = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 100px;
    right: 80px;
    top: 50px;
    background: rgba(0, 0, 0, .75);
    border-radius: 15px;
    @media screen and (max-width: 480px){
        right: 20px;
        top: 10px;
        width: 250px;
        height: 60px;
    }
`;

export const TextInfo = styled.p`
    font-size: 28px;
    color: #ffef00;
    text-shadow: 0 0 20px #ffef00;
    @media screen and (max-width: 480px){
        font-size: 16px;
    }
    &.distributor{
        text-transform: uppercase;
        margin-bottom: 20px;
        @media screen and (max-width: 480px){
            margin-bottom: 10px;
            font-size: 14px;
        }
    }
`;

const ButtonStyles = css`
    background: #181818;
    position: absolute;
    box-shadow: 0 20px 35px #00000080;
    outline: none;
    border: none;
    border-radius: 5px;
    overflow: hidden;
    background-color: #181818;
    cursor: pointer;
    margin-top: 50px;
    &:before{
        content: "";
        background-image: conic-gradient(#ffef00 20deg, transparent 120deg);
        height: 150%;
        width: 150%;
        position: absolute;
        left: -25%;
        top: -25%;
        animation: ${rotate} 2s infinite linear;
    }
    &:after{
        width: 94%;
        height: 94%;
        position: absolute;
        color: #ffef00;
        background-color: #181818;
        border-radius: 5px;
        top: 3%;
        left: 3%;
        display: grid;
        place-items: center;
        font-size: 16px;
        @media screen and (max-width: 480px){
            font-size: 10px;
        }
    }
    &:hover{
        text-shadow: 0 0 20px #ffef00;
    }
    &:active{
        transform: translate(-5px, 5px);
    }
    @media screen and (max-width: 768px){
        margin-top: 10px;
    }
`;

export const Free = styled(Link)`
    ${ButtonStyles}

    height: 60px;
    width: 200px;
    left: 65%;
    bottom: 50px;

    &:after{
        content: 'Quiero mis folios'; 
    }

    @media screen and (max-width: 480px){
        left: 60%;
        bottom: 50px;
        width: 120px;
        height: 40px;
    }
`;

export const Buy = styled(Link)`
    ${ButtonStyles}

    height: 60px;
    width: 200px;
    left: 8%;
    bottom: 100px;

    &:after{
        content: 'Comprar';
    }

    @media screen and (max-width: 480px){
        left: 10%;
        bottom: 80px;
        width: 120px;
        height: 40px;
    }
`;

export const BecomeDistributor = styled(Link)`
    ${ButtonStyles}

    height: 60px;
    width: 270px;
    right: 50px;
    top: 0;

    &:after{
        content: 'Conviertete en distribuidor';
    }

    @media screen and (max-width: 480px){
        right: 10px;
        top: 10px;
        width: 160px;
        height: 40px;
    }
`;

export const TextPackages = styled.div`
    position: absolute;
    top: 120px;
    left: 60px;
    width: 400px;
    font-size: 24px;
    color: #ffef00;
    text-shadow: 0 0 20px #ffef00;
    @media screen and (max-width: 480px){
        top: 20px;
        left: 30px;
        width: 180px;
        font-size: 12px;
    }
`;

export const DivDistributor = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    bottom: 50px;
    left: 80px;
    padding: 30px;
    background: rgba(0, 0, 0, .75);
    border-radius: 15px;
    @media screen and (max-width: 480px){
        padding: 15px;
        width: 250px;
        font-size: 12px;
        left: 30px;
    }
`;

export const TextDescription = styled.p`
    color: #fff;
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

export const TextLink = styled(Link)`
    padding: 0;
    margin: 0;
    color: ${props => props.color ? props.color : '#fff'};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    text-decoration: none;
    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`;

export const Text = styled.p`
    padding: 0;
    margin: 0;
    color: ${props => props.color ? props.color : '#fff'};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
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