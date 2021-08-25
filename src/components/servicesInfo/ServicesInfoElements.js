import styled from 'styled-components';

export const Text = styled.div`
    margin: 20px 40px;
    padding-top: 40px;
    @media screen and (max-width: 768px){
        margin: 20px 10px;
    }
`;

export const Span = styled.span`
    color: #ffef00;
`;

export const List = styled.ul`
    list-style-type: none;
    margin-left: 100px;
    @media screen and (max-width: 768px){
        margin-left: 50px;
    }
`;

export const ListItem = styled.li`
    margin: 5px 0;
`;

export const Products = styled.h2`
    margin: 40px 50px 0;
    color: #ffef00;
    @media screen and (max-width: 768px){
        margin: 30px 10px 0;
        font-size: 20px;
    }
`;
