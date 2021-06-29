import styled, {css} from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Slider = styled.div`
    width: 100%;
    height: 80vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 35px #00000080;

    @media screen and (max-width: 768px){
        height: 40vh;
    }
`;

export const Slide = styled.div`
    min-width: 100%;
    height: 80vh;
    transition: .5s;
    overflow: hidden;
    box-shadow: 0 20px 35px #00000080;
`;

const ButtonStyles = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 80%;
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
`;

export const GoLeft = styled.button`
    ${ButtonStyles}
    left: 0;
`;

export const GoRight = styled.button`
    ${ButtonStyles}
    right: 0;
`;

export const ImageComponent = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    box-shadow: 0 20px 35px #00000080;
`;

export const ArrowLeft = styled(IoIosArrowBack)`
    color: #fff;
    font-size: 1.8rem;
    &:hover{
        color: #ffef00;
    }
`;

export const ArrowRight = styled(IoIosArrowForward)`
    color: #fff;
    font-size: 1.8rem;
    &:hover{
        color: #ffef00;
    }
`;