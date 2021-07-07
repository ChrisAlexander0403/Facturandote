import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const GlobalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const Container = styled.div`
    position: relative;
    width: 70%;
    height: 15rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    box-shadow: 0 20px 35px #00000080;
    @media screen and (max-width: 768px){
        height: 12rem;
        width: 100%;
    }
    @media screen and (max-width: 480px){
        margin-bottom: 2rem;
    }
`;

export const TitleContainer = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #222;
    height: 100%;
    width: 70%;
    clip-path: ${props => props.clipPath || 'polygon(73% 0, 100% 38%, 81% 100%, 0 100%, 0 0)'};
    padding: 3rem;
    margin-top: 20px;
    align-items: ${props => props.flex || 'flex-start'};
    @media screen and (max-width: 768px){
        padding: 1.5rem;
        width: 60%;
        clip-path: ${props => props.clipPathMobile || 'polygon(0 0, 100% 0, 90% 100%, 0 100%)'};
    }
    @media screen and (max-width: 480px){
        width: 50%;
        clip-path: none;
        margin-top: 0;
        padding: 0;
        background: #181818;
    }
`;

export const Image = styled.img`
    position: relative;
    height: 100%;
    width: 30%;
    padding: 8px;
    object-fit: cover;
    object-position: center;
    @media screen and (max-width: 768px){
        width: 40%;
    }
    @media screen and (max-width: 480px){
        width: 50%;
        padding: 0;
    }
`;

export const Title = styled(NavLink)`
    color: #ffef00;
    text-decoration: none;
    text-shadow: 0 0 10px #ffef00;
    font-size: 24px;
    text-align: ${props => props.align || 'start'};
    @media screen and (max-width: 480px){
        font-size: 20px;
        margin: auto 1.5rem;
    }
`;

export const Content = styled.div`
    color: #fff;
    font-size: 16px;
    margin: 25px;
    text-align: ${props => props.Align || 'start'};
    @media screen and (max-width: 480px){
        position: absolute;
        z-index: 1;
        padding: 45px 10px;
        margin: ${props => props.Margin ||'0 0 0 100%'};
        transition: width 1s ease;
        background: #00000099;
        height: 100%;
        width: 100%;
        text-align: start;
    }
`;


