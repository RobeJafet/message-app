import React from 'react';
import {Container, ConversationContainer, ProfilePicture} from './style';
import { useNavigate } from 'react-router-dom';

const Conversation = ({ name, lastMessage, idConversacion, InfoToPage }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/chat/${idConversacion}/${name}`);
    }

    return (
        <Container onClick={handleClick}>
            <ProfilePicture/>
            <ConversationContainer>
                <p>{name}</p>
                <p className='tag'>{lastMessage}</p>
            </ConversationContainer>
        </Container>
    )
}

export default Conversation;