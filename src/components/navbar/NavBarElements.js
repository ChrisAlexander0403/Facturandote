import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';


export const Nav = styled.nav`
    background: #181818;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 3;
    position: fixed;
    margin-top: -80px;
    @media screen and (orientation: landscape) and (max-width: 1080px){
        position: relative;
    }
`;

export const NavLinkLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 65%;
    cursor: pointer;
    border-radius: 4px;
    margin: 1rem 0 0 5rem;
    user-select: none;
    @media screen and (max-width: 768px){
        height: 30%;
        margin: auto 0;
    }
`;

export const Image = styled.img`
    height: 55px;
`;

export const NavLink = styled(Link)`
    color: #ffef00;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 65%;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    user-select: none;
    &.active{
        color: #fff;
    }

    @media screen and (max-width: 768px){
        height: 5rem;
        font-size: 1rem;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #ffef00;

    @media screen and (max-width: 1080px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
export const Close = styled(CgClose)`
    display: none;
    color: #ffef00;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    background: #181818;
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 24px;
    z-index: 3;
    transition: left 0.5s ease;

    @media screen and (max-width: 1080px){
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 80px;
        left: -100%;
        &.active{
            left: 0;
        }
    }

    @media screen and (orientation: landscape) and (max-width: 1080px){
        height: 80vh;
        padding-bottom: 20px;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

export const NavBtnLink = styled.button`
    height: 100%;
    background: #000;
    padding: 29px 22px;
    color: #ffef00;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    text-shadow: 0 0 20px #ffef00;
    font-size: 16px;
    &:hover{
        transition: all 0.5s ease-in-out;
        background: #ffef00;
        color: #3d3d3d;
    }

    @media screen and (max-width: 768px){
        height: 5rem;
        font-size: 1.3rem;
        width: 100%;
        margin-left: 0;
        text-align: center;
    }
`;