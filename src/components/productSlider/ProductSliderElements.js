import styled, {css, keyframes} from 'styled-components';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

const rotate = keyframes`
    100%{
        transform: rotate(-360deg);
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
`;

export const Container = styled.div`
    display: flex;
    overflow: hidden;
    width: 80%;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin: 0 20px;
    box-shadow: inset 0 20px 35px #00000080;
    @media screen and (max-width: 768px){
        margin: 0;
    }
`;

export const Div = styled.div`
    position: relative;
    box-sizing: border-box;
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    min-width: 300px;
    height: 450px;
    box-shadow: 0 10px 20px #00000080;
    background: linear-gradient(.345turn, #222 0%, #222 50%, #1c1c1c 50%, #1c1c1c 100%);
    transition: .5s;
    @media screen and (max-width: 768px){
        min-width: 250px;
        height: 400px;
        margin: 30px 55px;
    }
`;
export const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    align-items: center;
    border-radius: 10px;
`;
export const Price = styled.p`
    margin: 20px;
    font-size: 40px;
    color: #ffef00;
    text-shadow: 0 0 20px #ffef00;
`;
export const Name = styled.p`
    margin: 30px 10px;
    font-size: 30px;
    text-shadow: 0 0 10px #fff;
`;
export const Info = styled.p`
    margin: 20px;
    font-size: 16px;
    text-shadow: 0 0 10px #fff;
`;
export const Buy = styled.button`
    height: 50px;
    width: 150px;
    background: #181818;
    position: relative;
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
        content: 'Comprar';
        
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

const Arrow = css`
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2rem;
    color: #ffef00;
    cursor: pointer;
    user-select: none;
    &:hover{
        color: #C2B600;
    }
    &:active{
        transform: translateY(5px);
        box-shadow: 0 10px 20px #00000090;
    }
`;

export const LeftArrow = styled(FaArrowAltCircleLeft)`
    ${Arrow}
`;

export const RightArrow = styled(FaArrowAltCircleRight)`
    ${Arrow}
`;