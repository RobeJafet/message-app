import {React, useState, useEffect} from 'react'
import {ChatContainer, MyMessage, MyMessageContainer, TheirMessageContainer, TheirMessage} from './style'
import db from '../../config/firebase';
import {updateDoc, onSnapshot, doc, arrayRemove} from 'firebase/firestore';

function useConversaciones (docRef){
    const [conversacion, setConversaciones] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            const newConversacion = {
                id: snapshot.id,
                ...snapshot.data(),
              };
           ;
            setConversaciones(newConversacion.mensajes);
        });
        return () => unsubscribe();
    }, []);
    return conversacion;
}

const Message = ({message, me, onDelete, index}) => {
    const handleDelete = () => {
        onDelete(index);
    }

    if(!me){
        return (
            <MyMessageContainer>  
                <div>
                    <MyMessage>
                        <p>{message}</p>
                    </MyMessage>
                </div>
                
                <svg onClick={handleDelete} width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L10.3846 11M10.3846 1L1 11" stroke="#C6C9CC"/>
                </svg>
            </MyMessageContainer>
        )
    }
    else{
        return (
            <TheirMessageContainer>
                <svg onClick={handleDelete} width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L10.3846 11M10.3846 1L1 11" stroke="#C6C9CC"/>
                </svg>
                <TheirMessage>
                    <p>{message}</p>
                </TheirMessage>
            </TheirMessageContainer>
        )
    }
}

const Chat = ({id}) => {
    const docRef = doc(db, "conversaciones", id);
    var conversacion = useConversaciones(docRef);

    const deleteMessage = async (index) => {
        const messageToDelete = conversacion[index];
        await updateDoc(docRef, {
            mensajes: arrayRemove(messageToDelete)
        });
    }

    return (
      <ChatContainer>
         {conversacion.map((message, index) =>(<Message key={index} message={message.texto} me={message.miMensaje} onDelete={deleteMessage} index={index}/>))}
      </ChatContainer>
    )
}

export default Chat;