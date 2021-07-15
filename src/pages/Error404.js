import React from 'react';
import styled from 'styled-components';
import Warning from './../img/warning.png';

const Error404 = () => {
    return (
        <Container>
            <Div>
                <Error>404</Error>
                <Text>Not Found</Text>
            </Div>
            <Image src={Warning}/>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 50px 15vw;
    width: 100%;
    min-height: 80vh;
    color: #ffef00;
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
    }
`;

const Div = styled.div`
    align-self: flex-start;
    @media screen and (max-width: 768px){
        align-self: center;
    }
`;

const Error = styled.h3`
    font-size: 10vw;
`;

const Text = styled.p`
    font-size: 5vw;
`;

const Image = styled.img`
    width: 30vw;
`;

export default Error404;