import React, { useState, useEffect, useRef } from 'react';
import { MainContainer, ChatButton, EnviarButton, MessageDiv, MessageArea, UserMessage, ChatDiv, SupportMessage, Text, MobileMainContainer, MessageIcon, MobileChatButton } from './ChatElements';
import { IoSend } from 'react-icons/io5';
import useWindowDimensions from './useWindowDimentions';

export default function ChatComponent() {
    const [x, setX] = useState(360);
    const [active, setActive] = useState(false);
    const [click, setClick] = useState(false);
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);
    const message = useRef(null);
    const message2 = useRef(null);
    
    const Open = () => {
        setX(x === 360 ? x - 360 : x + 360);
        setIsOpen(!isOpen);
        if(!isOpen) message.current.focus();
    }

    const lostFocus = () => {
        
    }

    const ToggleActive = () => {
        setClick(!click);
        setIsOpen(!isOpen);
        if(!isOpen) message2.current.focus();
    }

    useEffect(() => {
        setActive(width < 769 ? true : false);
    }, [width]);
    return (
        <>  
            {!active ? 
                <MainContainer onBlur={lostFocus} style={{ transform: `translateY(${x}px)`}}>
                    <ChatButton onClick={Open}>Asistencia</ChatButton>
                    <ChatDiv>
                        <UserMessage>
                            <Text>Buenos días, ¿Cómo podemos ayudarte?</Text>
                        </UserMessage>
                        <SupportMessage>
                            <Text>¿Me podría indicar cómo acceder al portal?</Text>
                        </SupportMessage>
                    </ChatDiv>
                    <MessageDiv>
                        <MessageArea ref={message} placeholder={"Escribe algo..."}></MessageArea>
                        <EnviarButton><IoSend /></EnviarButton>
                    </MessageDiv>
                </MainContainer>
            :
                <MobileMainContainer props={click}>
                    <MobileChatButton props={click} onClick={ToggleActive}>{click ? "Asistencia" : <MessageIcon/>}</MobileChatButton>
                        <div style={{display: `${click ? "flex": "hidden"}`, flexDirection: "column", width: "100%"}}>
                            <ChatDiv>
                                <UserMessage>
                                    <Text>Buenos días, ¿Cómo podemos ayudarte?</Text>
                                </UserMessage>
                                <SupportMessage>
                                    <Text>¿Me podría indicar cómo acceder al portal?</Text>
                                </SupportMessage>
                            </ChatDiv>
                            <MessageDiv>
                                <MessageArea ref={message2} placeholder={"Escribe algo..."}></MessageArea>
                                <EnviarButton><IoSend /></EnviarButton>
                            </MessageDiv>
                        </div>
                </MobileMainContainer>
            }
        </>
    );
}
