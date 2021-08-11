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
    width: 100%;
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

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    @media screen and (max-width: 480px){
        flex-direction: column;
        justify-content: center;
    }
`;

export const Button = styled.div`
    box-sizing: border-box;
    margin: 40px 0;
    height: 100px;
    width: 200px;
    background: #333;
    padding: 0;
    cursor: pointer;
    /* box-shadow: 0 20px 35px #ffef0050; */
`;

export const Text = styled.p`
    margin: 0 0 0 10px;
    padding: 0;
    color: #ffef00;
    text-shadow: 0 0 20px #ffef00;
    &.inside{
        color: #fff;
        text-shadow: 0 0 20px #fff;
        margin: 10px;
    }
    &.down{
        margin: 0 10px 25px;
        align-self: flex-end;
    }
`;

export const DownloadButton = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
    clip-path: polygon(0 0, 0 90%, 10% 90%, 10% 100%, 28% 100%, 28% 90%, 46% 90%, 46% 100%, 60% 100%, 71% 90%, 90% 90%, 100% 79%, 100% 0);
    width: 210px;
    height: 110px;
    color: #fff;
    background: #000;
    outline: none;
    border: none;
`;

export const Download = styled.a`
    text-decoration: none;
`;