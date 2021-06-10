import styled, {keyframes} from 'styled-components';

const travel = keyframes`
    100%{
        left: 0;
        width: 100%;
    }
`;

export const Body = styled.div`
    background-color: #181818;
    color: #fff;
    padding: 0 1.5rem;
`;
export const Container = styled.div`
    background-color: #181818;
    max-width: 1117px;
    margin: 0 auto;
    padding: 1.5rem;
`;
export const Title = styled.h1`
    position: relative;
    text-align: center;
    font-size: 3em;
    color: #fff;
    margin: 20px 0;
    grid-column: span 2;
    margin-bottom: 50px;
    padding-bottom: 30px;
    @media screen and (max-width: 768px){
        font-size: 24px;
        margin-bottom: 20px;
    }
    &::after{
        content: '';
        width: 5%;
        height: 2px;
        background-color: #ffef00;
        position: absolute;
        bottom: 0;
        left: 50%;
        border-radius: 10px;
        animation: ${travel} 2s infinite linear;
    }
`;
export const Span = styled.span`
    color: #ffef00;
    text-shadow: 0 0 20px #ffef00;
`;