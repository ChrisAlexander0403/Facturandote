import styled, {css} from 'styled-components';
import {AiOutlineMessage} from 'react-icons/ai';

const style = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 300px;
    height: 400px;
    z-index: 1;
    padding: 0;
    background: #222;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 35px #00000080;
`;
const style2 = css`
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    z-index: 1;
    clip-path: circle(50% at 50% 50%);
`;

const buttonStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    background: #181818;
    color: #fff;
    
    text-align: start;
    padding-left: 20px;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
`;

const buttonStyle2 = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #222;
    clip-path: circle(50% at 50% 50%);
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    right: 2%;
    width: 300px;
    height: 400px;
    z-index: 1;
    padding: 0;
    background: #222;
    box-shadow: 0 20px 35px #00000080;
    overflow: hidden;
    transition: transform .5s;
`;

export const MobileMainContainer = styled.div`
    ${props => props.props ? `${style}` : `${style2}`}
    transition: all .2s linear;
`;

export const MessageIcon = styled(AiOutlineMessage)`
    color: #ffef00;
    font-size: 30px;
`;

export const ChatButton = styled.div`
    ${buttonStyle}
    border-bottom: #ffef00 1px solid;
`;

export const MobileChatButton = styled.div`
    ${props => props.props ? `${buttonStyle}` : `${buttonStyle2}`}
`;

const Message = css`
    max-width: 200px;
    min-width: 50px;
    width: auto;
    min-height: 30px;
    height: auto;
    border-radius: 25px;
    padding: 7px 15px;
    margin: 5px 0;
`;

export const UserMessage = styled.div`
    ${Message}
    color: #181818;
    background: #ffef00;
    align-self: flex-start;
`;

export const SupportMessage = styled.div`
    ${Message}
    color: #fff;
    background: #181818;
    align-self: flex-end;
`;

export const Text = styled.p`
    font-size: 12px;
`;

export const ChatDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 314px;
    padding: 10px;
`;

export const MessageDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 5px 2px;
    background: #181818;
`;

export const EnviarButton = styled.button`
    box-shadow: 0 20px 35px #00000080;
    padding: 6px 0 0 3px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    font-size: 25px;
    color: #181818;
    background: #ffef00;
    outline: none;
    cursor: pointer;
    &:hover{
        background: #ffef0095;
    }
    &:active{
        transform: translateY(5px);
    }
`;

export const MessageArea = styled.textarea`
    overflow: hidden;
    resize: none;
    width: 75%;
    height: 30px;
    margin-right: 5px;
    border-radius: 25px;
    outline: none;
    padding: 5px 10px;    
`;