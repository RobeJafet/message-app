import React from 'react'
import Chat from '../components/chat';
import ChatHeader from '../components/chat-header';
import ChatFooter from '../components/chat-footer';
import {ContainerChatPage} from '../style'
import { useParams } from 'react-router-dom';


const ChatPage = () => {
    const {id, nombre} = useParams();
    return (
        <ContainerChatPage>
            <ChatHeader name={nombre}/>
            <Chat id = {id}/>
            <ChatFooter id = {id}/>
        </ContainerChatPage>
    )
}

export default ChatPage;