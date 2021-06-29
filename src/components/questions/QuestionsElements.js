import styled from 'styled-components';
import {IoIosArrowDown, IoIosArrowBack} from 'react-icons/io';

export const DivQuestions = styled.div`
    padding: 10px;
`;

export const Question = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #181818;
    color: #fff;
    font-size: 18px;
    margin: 10px 10px 0;
    padding: 10px 15px;
    border: none;
    border-bottom: #ffef00 1px solid;
    text-align: left;
    cursor: pointer;
    width: 100%;
    outline: none;
    user-select: none;
    &:hover, &:active{
        background: #222;
    }
`;

export const Answer = styled.div`
    width: 100%;
    margin: 0 10px 10px;
    overflow: hidden;
`;

export const P = styled.div`
    padding: 10px 40px;
`;

export const Q = styled.div`
    display: flex;
    width: 90%;
`;

export const ArrowDown = styled(IoIosArrowDown)`
    font-size: 20px;
`;

export const ArrowBack = styled(IoIosArrowBack)`
    font-size: 20px;
`;