import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FiMail, FiPhone} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go'
import {TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialInstagramCircular} from 'react-icons/ti';

export const Container = styled.div`
    position: relative;
    height: 18rem;
    width: 100%;
`;

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 20px;
    padding: 0 20px;
    @media screen and (max-width: 768px){
        padding: 0;
    }
`;

export const FooterInformation = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 90%;
    background-color: #111;
    flex-direction: row;
`;

export const Contact = styled.div`
    height: 100%;
    width: 100%;
    padding: 20px 20px 30px;
    
    @media screen and (max-width: 768px){
        grid-column: 1/-1;
    }
`;

export const Title = styled.p`
    padding: 10px 20px 30px 20px;
    color: #fff;
    font-size: 20px;
    @media screen and (max-width: 768px){
        padding: 10px 10px 15px 0;
    }
`;

export const Text = styled.div`
    display: flex;
    padding: 20px 40px 0 20px;
    color: #fff;
    font-size: 16px;
    @media screen and (max-width: 768px){
        padding: 10px 0 0 10px;
    }
`;

export const Image = styled.img`
    width: 250px;
    @media screen and (max-width: 768px){
        width: 170px;
    }
`;

export const Description = styled.div`
    height: 100%;
    width: 100%;
    padding: 20px 20px 10px;
    @media screen and (max-width: 768px){
        grid-column: 1/-1;
    }
`;

export const FooterEnd = styled.div`
    color: #fff;
    display: flex;
    height: 10%;
    width: 100%;
    align-items: center;
    padding-left: 30px;
    user-select: none;
    background: #000;
    @media screen and (max-width: 768px){
        padding-left: 10px;
        font-size: 10px;
        display: none;
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    margin: auto 5px;
    font-size: 16px;
    @media screen and (max-width: 768px){
        margin: 10px 5px;
    }
`;

export const Mail = styled(FiMail)`
    margin-right: 7px;
    min-width: 16px;
    min-height: 16px;
`;

export const Phone = styled(FiPhone)`
    margin-right: 7px;
    min-width: 16px;
    min-height: 16px;
`;
export const Location = styled(GoLocation)`
    margin-right: 7px;
    min-width: 16px;
    min-height: 16px;
`;

export const Facebook = styled(TiSocialFacebookCircular)`
    color: #fff;
    font-size: 50px;
    cursor: pointer;
`;
export const Twitter = styled(TiSocialTwitterCircular)`
    color: #fff;
    font-size: 50px;
    cursor: pointer;
`;
export const Instagram = styled(TiSocialInstagramCircular)`
    color: #fff;
    font-size: 40px;
    cursor: pointer;
`;