import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    100%{
        transform: rotate(-360deg);
    }
`;

export const DivForm = styled.div`
    padding: 2em;
    @media screen and (max-width: 768px){
        padding: 1em 2em;
    }
`;

export const Success = styled.p`
    margin: 20px;
`;

export const DivSuccess = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const SubtitleSuccess = styled.h2`
    margin: 5px 0 20px;
`;

export const Image = styled.img`
    width: 200px;
`;


export const Error = styled.p`
    padding-top: 5px;
    font-size: 12px;
    color: red;
`;

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 3fr;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;
export const SignUpForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px 40px;
    @media screen and (max-width: 768px){
        margin: 0 10px 40px;
        grid-column: 1/-1;
    }
`;
export const LogInDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        grid-column: 1/-1;
    }
`;

export const Subtitle = styled.h2`
    margin: 40px 20px 20px;
`;

export const Info = styled.p`
    margin: 10px 40px;
`;
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
`;

export const Button = styled.button`
    height: 50px;
    width: 300px;
    background: #181818;
    position: relative;
    box-shadow: 0 20px 35px #00000080;
    outline: none;
    border: none;
    border-radius: 5px;
    overflow: hidden;
    background-color: #181818;
    cursor: pointer;
    margin-bottom: 50px;
    &:before{
        content: "";
        background-image: conic-gradient(#ffef00 20deg, transparent 120deg);
        height: 150%;
        width: 150%;
        position: absolute;
        left: -25%;
        top: -25%;
        animation: ${rotate} 2s infinite linear;
    }
    &:after{
        content: 'Accede como Distribuidor';
        width: 94%;
        height: 94%;
        position: absolute;
        color: #ffef00;
        background-color: #181818;
        border-radius: 5px;
        top: 3%;
        left: 3%;
        display: grid;
        place-items: center;
        font-size: 16px;
    }
    &:hover{
        text-shadow: 0 0 20px #ffef00;
    }
    &:active{
        transform: translateY(5px);
    }
`;

export const TextArea = styled.textarea`
    width: 90%;
    padding: .7em;
    border: none;
    background: none;
    border-bottom: 1px solid #ffef00;
    color: #fff;
    outline: 0;
    resize: none;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const Label = styled.label`

`;

export const Input = styled.input.attrs(props => ({
    type: props.type
}))`
    width: 90%;
    padding: .7em;
    border: none;
    background: none;
    border-bottom: 1px solid #ffef00;
    color: #fff;
    outline: 0;
    &::placeholder{
        content: ${props => props.placeholder};
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active{
        box-shadow: 0 0 0 30px #181818 inset !important;
    }
    &:-webkit-autofill {
        -webkit-text-fill-color: #fff !important;
        caret-color: white !important;
    }
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const SendInput = styled.input.attrs(props => ({
    type: 'submit'
}))`
    width: 85%;
    margin: 20px;
    border: none;
    margin-top: 20px;
    background: #ffef00;
    border-bottom: 1px solid #ffef00;
    color: #000;
    outline: 0;
    text-transform: uppercase;
    padding: 1em;
    grid-column: span 2;
    &:hover{
        background: #C2B600;
        color: #fff;
        transition: all .3s ease-in-out;
    }
    &:active{
        transform: translateY(5px);
    }
    @media screen and (max-width: 768px){
        width: 90%;
    }
`;