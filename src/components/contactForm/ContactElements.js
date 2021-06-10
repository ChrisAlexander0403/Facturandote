import styled, {keyframes} from 'styled-components';
import {FiMail, FiPhone} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go';
import {AiOutlineGlobal} from 'react-icons/ai';

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
    20%,80%{
        color: #222;
        filter: blur(0px);
        text-shadow: none;
    }
`;

export const Image = styled.img`
    width: 200px;
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

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 3fr;
    box-shadow: 0 20px 35px #00000080;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
    margin-bottom: 50px;
`;
export const DivForm = styled.div`
    padding: 2em;
`;
export const ContactForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 20px;
`;
export const InfoForm = styled.div`
    background-color: #000;
    padding: 2em;
    @media screen and (max-width: 768px){
        grid-column: 1/-1;
    }
`;

export const SubtitleLightning = styled.h3`
    margin-top: 100px;
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    animation: ${lightning} 5s linear infinite;
    @media screen and (max-width: 768px){
        margin-top: 30px;
    }
`;
export const Subtitle = styled.h2`
    margin: 5px 0 20px;
`;
export const Text = styled.p`
    margin-top: 20px; 
    @media screen and (max-width: 768px){
        grid-column: 1/-1;
    }
`;
export const Error = styled.p`
    padding-top: 5px;
    font-size: 12px;
    color: red;
`;
export const AreaText = styled.p`
    margin-top: 20px;
    grid-column: span 2;
`;
export const TextInfo = styled.p`
    margin: 5px 25px 10px;
`;
export const Label = styled.label`
    
`;
export const TextArea = styled.textarea`
    min-width: 100%;
    max-width: 100%;
    padding: .7em;
    border: none;
    background: none;
    border-bottom: 1px solid #ffef00;
    color: #fff;
    outline: 0;
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
export const Global = styled(AiOutlineGlobal)`
    margin-right: 5px;
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
    }
    //https://qastack.mx/programming/2781549/removing-input-background-colour-for-chrome-autocomplete
`;
export const SendInput = styled.input.attrs(props => ({
    type: 'submit'
}))`
    width: 100%;
    padding: .7em;
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
        transition: background .3 ease-in-out;
    }
    &:active{
        transform: translateY(5px);
    }
`;