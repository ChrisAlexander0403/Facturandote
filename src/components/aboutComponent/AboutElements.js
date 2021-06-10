import styled from 'styled-components';

export const ContentGrid = styled.div`
    display: grid;
    padding: 50px 20px 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    margin-bottom: 100px;
`;

export const MainContent = styled.div`
    @media screen and (max-width: 768px){
        grid-column: 1/-1;
    }

`;

export const Subtitle = styled.h2`
    text-align: center;
    color: #ffef00;
    font-size: 24px;
    margin-top: 50px;
`;

export const Content = styled.p`
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin: 10px 50px;
    @media screen and (max-width: 768px){
        margin: 10px;
    }
`;

export const DivValores = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    padding: 10px 50px;
`;

export const Text = styled.p`
    position: relative;
    color: #fff;
    text-align: center;
    font-size: 16px;
    padding: 10px;
    &::after{
        content: '';
        width: 5%;
        height: 2px;
        background-color: #ffef00;
        position: absolute;
        bottom: 0%;
        left: 50%;
        border-radius: 10px;
        transition: all 500ms ease;
    }
    &:hover::after{
        left: 0%;
        width: 100%;
    }
`;

export const ExtraContent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
        @media screen and (max-width: 768px){
            grid-column: 1/-1;
        }
`;

export const Image = styled.img`
    width: 300px;
    height: 300px;
`;

export const ExtraTitle = styled.h3`
    font-size: 20px;
    color: #ffef00;
    margin: 60px 20px 20px;
    @media screen and (max-width: 768px){
        margin: 30px 20px
    }

`;
export const Extra = styled.p`
    color: #fff;
    text-align: center;
    font-size: 16px;
    margin: 5px;
`;