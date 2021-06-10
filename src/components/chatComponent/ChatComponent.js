import React, { useState } from 'react';
import {MainContainer, ChatButton, EnviarButton, MessageDiv, MessageArea, UserMessage, ChatDiv, SupportMessage, Text} from './ChatElements';
import {IoSend} from 'react-icons/io5';

export default function ChatComponent(){
    const [x, setX] = useState(360);
    const goUp = () => {
        setX(x === 360 ? x - 360 : x + 360);
    }
    return(
        <>
            <MainContainer style={{transform:`translateY(${x}px)`}}>
                <ChatButton onClick={goUp}>Asistencia</ChatButton>
                <ChatDiv>
                    <UserMessage>
                        <Text>Buenos días, ¿Cómo podemos ayudarte?</Text>
                    </UserMessage>
                    <SupportMessage>
                        <Text>¿Me podría indicar cómo acceder al portal?</Text>
                    </SupportMessage>
                </ChatDiv>
                <MessageDiv>
                    <MessageArea></MessageArea>
                    <EnviarButton><IoSend/></EnviarButton>
                </MessageDiv>
            </MainContainer>
        </>
    );
}
