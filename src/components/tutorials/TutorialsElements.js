import styled, { keyframes } from "styled-components";
import { AiOutlinePlus } from 'react-icons/ai';

export const rotate = keyframes`
    0%{
        transform: rotate(0deg);
    }100%{
        transform: rotate(675deg);
    }
`;

export const VideoDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    overflow: hidden;
    transition: height 0.5s ease-in-out;
`;

export const Subtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 50px;
    border-bottom: 2px #ffef00 solid;
    margin-bottom: 20px;
    padding: 0 20px;
    cursor: pointer;
`;

export const Plus = styled(AiOutlinePlus)`

`;

export const Video = styled.iframe`
    outline: none;
    border: none;
    width: 90%;
    height: 90%;
    margin: 0 10px;
    animation: ${props => props.animation && `${rotate} .5s ease` };

    @media screen and (max-width: 480px){
        height: 50%;
    }
`;