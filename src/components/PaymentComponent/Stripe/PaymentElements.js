import styled, { keyframes } from "styled-components";
import { CardElement } from "@stripe/react-stripe-js";
import { ImSpinner10 } from 'react-icons/im';
import { MdArrowDropDown } from 'react-icons/md';
// import { FaCcStripe } from 'react-icons/fa';
import { GrStripe } from 'react-icons/gr';

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const Div = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    justify-content: center;
    width: 100%;
    box-shadow: 0 20px 35px #00000080;
    min-height: 600px;
    /* @media screen and (max-width: 768px){
        grid-template-columns: 50% 50%;
    } */
`;

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    min-height: 400px;
    @media screen and (max-width: 768px){
        padding: 1em 2em;
    }
`;

export const SuccessDiv = styled.div`
    width: 100%;
    height: 600px;
`;

export const DetailsDiv = styled.div`
    position: relative;
    width: 100%;
    background: #000;
    padding: 20px 50px 40px;
    height: 100%;
    @media screen and (max-width: 768px){
        grid-column: 1/-1;
        padding: 10px 25px 20px;
    }
`;

export const Name = styled.p`
    font-size: 24px;
    margin: 10px 10px 30px;
`;

export const Info = styled.div`
    display: flex;
    font-size: 16px;
    padding: 10px 30px;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        font-size: 13px;
    }
`;

export const Error = styled.p`
    margin: 5px 0 0 5px;
    font-size: 13px;
    color: red;
`;

export const Spinner = styled(ImSpinner10)`
    animation: ${spin} 1s linear infinite;
`;

export const StyledCardElement = styled(CardElement)`
    width: 100%;
    margin: 15px 0;
    padding: 5px;
    background: #222;
    height: 30px;
`;

export const Button = styled.button`
    margin: 5px 0;
    width: 100%;
    padding: .7em;
    border: none;
    background: #ffef00;
    border-bottom: 1px solid #ffef00;
    color: #000;
    outline: 0;
    text-transform: uppercase;
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

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`;

export const Label = styled.label`
    font-size: 16px;
`;

export const DropdownList = styled.div`
    width: 100%;
    position: relative;
    user-select: none;
`;
export const DropdownBtn = styled.div`
    position: relative;
    padding: 15px;
    font-size: 15px;
    border-bottom: #ffef00 1px solid;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

export const DropdownArrow = styled(MdArrowDropDown)`
    font-size: 20px;
    color: #ffef00;
`;

export const DropdownContent = styled.div`
    top: 110%;
    position: absolute;
    background: #181818;
    box-shadow: 3px 3px 10px 6px #00000060;
    font-weight: 500;
    width: 100%;
    z-index: 2;
    height: 300px;
    overflow: auto;
    &::-webkit-scrollbar-thumb {
        background: #ffef00;
        border-radius: 4px;
    }
    &::-webkit-scrollbar {
        width: 10px;
        background: #3d3d3d;
}
`;

export const DropdownItem = styled.div`
    position: relative;
    padding: 15px;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
    z-index: 2;
    &:hover{
        background: #333;
    }
`;

export const RadioDiv = styled.div`
    margin: 10px 20px 0;
`;

export const RadioLabel = styled.label`
    margin-left: 5px;
`;

export const Stripe = styled(GrStripe)`
    width: 20px;
    height: 20px;
    padding: 2px;
    color: #635bff;
    background: #fff;
    border-radius: 2px;
    transform: translateY(4px);
`;

export const Success = styled.p`
    margin: 20px;
`;

export const SubtitleSuccess = styled.h2`
    margin: 5px 0 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: .7em;
    border: none;
    background: none;
    border-bottom: 1px solid #ffef00;
    color: #fff;
    outline: 0;
    text-transform: ${props => props.uppercase || 'none'};
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
`;

export const Form = styled.form`
    width: 100%;
    padding: 10px 50px 40px;
    @media screen and (max-width: 768px){
        grid-column: 1/-1;
    }
`;