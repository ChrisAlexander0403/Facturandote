import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FiMail, FiPhone} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go'

export const Container = styled.div`
    position: absolute;
    height: 18rem;
    width: 100%;
    background-color: #000;
`;

export const FooterInformation = styled.div`
    height: 90%;
    background-color: #111;
    display: flex;
    flex-direction: row;
`;

export const Contact = styled.div`
    height: 100%;
    width: 50%;
    padding: 20px;
    
`;

export const Title = styled.p`
    padding: 10px 20px 30px 20px;
    color: #fff;
    font-size: 20px;
    @media screen and (max-width: 768px){
        font-size: 16px;
        padding: 10px 10px 15px 0;
    }
`;

export const Text = styled.p`
    padding: 20px 0 0 20px;
    color: #fff;
    font-size: 15px;
    @media screen and (max-width: 768px){
        font-size: 12px;
        padding: 10px 0 0 10px;
    }
`;

export const Image = styled.img`
    @media screen and (max-width: 768px){
        width: 150px;
    }
`;

export const Description = styled.div`
    height: 100%;
    width: 50%;
    padding: 20px;
`;

export const FooterEnd = styled.div`
    color: #fff;
    display: flex;
    height: 10%;
    width: 100%;
    align-items: center;
    padding-left: 30px;
    user-select: none;
    @media screen and (max-width: 768px){
        padding-left: 10px;
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    margin: auto 5px;
    @media screen and (max-width: 768px){
        font-size: 12px;
        margin: 10px 5px;
    }
`;

export const Mail = styled(FiMail)`
    margin-right: 5px;
`;

export const Phone = styled(FiPhone)`
    margin-right: 5px;
`;
export const Location = styled(GoLocation)`
    margin-right: 5px;
`;