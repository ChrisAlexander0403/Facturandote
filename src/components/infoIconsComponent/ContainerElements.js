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

    @media screen and (max-width: 480px){
        height: auto;
        background: #181818;
    }
`;
export const OptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
    width: 60vw;
    @media screen and (max-width: 480px){
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, auto);
        width: 100%;
    }
`;

export const Squares = styled.div`
    display: inline;
    height: 100%;
    width: auto;
    text-align: center;
    animation: ${lightning} 5s linear infinite;
    &:nth-child(1){
        animation-delay: 0s;
        @media screen and (max-width: 480px){
            grid-column: 1/3;
        }
    }
    &:nth-child(2){
        animation-delay: 1s;
        @media screen and (max-width: 480px){
            grid-column: 3/5;
        }
    }
    &:nth-child(3){
        animation-delay: 2s;
        @media screen and (max-width: 480px){
            grid-column: 5/7;
        }
    }
    &:nth-child(4){
        animation-delay: 3s;
        @media screen and (max-width: 480px){
            grid-column: 2/4;
        }
    }
    &:nth-child(5){
        animation-delay: 4s;
        @media screen and (max-width: 480px){
            grid-column: 4/6;
        }
    }
    @media screen and (max-width: 768px){
        padding: 5px;
        animation: none;
        text-shadow: 0 0 20px #ffef00;
    }
`;

export const Span = styled.span`
    font-size: 4rem;
    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
`;

export const Name = styled.p`
    font-size: 24px;
    @media screen and (max-width: 768px){
        color: #ffef00;
        font-size: 16px;
        text-shadow: 0 0 10px #ffef00;
    }
`;