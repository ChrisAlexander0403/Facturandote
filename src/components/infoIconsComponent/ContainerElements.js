import styled, {keyframes} from 'styled-components';

const lightning = keyframes`
    0%,100%{
        color: #ffef00;
        filter: blur(1px);
        text-shadow: 0 0 10px #ffef00,
                    0 0 20px #ffef00,
                    0 0 40px #ffef00,
                    0 0 80px #ffef00,
                    0 0 120px #ffef00,
                    0 0 200px #ffef00,
                    0 0 300px #ffef00;
    }
    10%,90%{
        color: #333;
        filter: blur(0px);
        text-shadow: none;
    }
`;

export const Options = styled.div`
    display: flex;
    height: 10rem;
    width: auto;
    justify-content: center;
    padding: 1rem;
    margin: 2rem 0 5rem;
    background-color: #222;
    box-shadow: 0 20px 35px #00000080;

    @media screen and (max-width: 768px){
        height: 6.5rem;
    }
`;
export const OptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 20%);
    height: 100%;
    width: 60vw;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const Squares = styled.div`
    display: inline;
    height: 100%;
    width: auto;
    text-align: center;
    @media screen and (max-width: 768px){
        padding: 5px;
    }
    animation: ${lightning} 5s linear infinite;
    &:nth-child(1){
        animation-delay: 0s;
    }
    &:nth-child(2){
        animation-delay: 1s;
    }
    &:nth-child(3){
        animation-delay: 2s;
    }
    &:nth-child(4){
        animation-delay: 3s;
    }
    &:nth-child(5){
        animation-delay: 4s;
    }
`;

export const Span = styled.span`
    font-size: 4rem;
    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
`;

export const Name = styled.p`
    font-size: 1.5rem;
    @media screen and (max-width: 768px){
        font-size: .75rem;
    }
`;