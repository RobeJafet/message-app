import React from 'react'
import {ContainerFooter, Footer, InputMessage, SendButton} from './style'
import db from '../../config/firebase';
import { arrayUnion, updateDoc, doc} from 'firebase/firestore';



const ChatFooter = ({id}) => {
    const docRef = doc(db, "conversaciones", id);

    const addMessage = (e) => {
        e.preventDefault()
        const message = e.target[0].value
        e.target[0].value = ""

        async function addFirebaseMessage(message) {
        await updateDoc(docRef, {
                mensajes: arrayUnion({
                    texto: message,
                    miMensaje: true
                })
        });
        }
        addFirebaseMessage(message);
    }

    return (
        <ContainerFooter>
            <Footer onSubmit={addMessage}>
                <InputMessage type="text" placeholder="Type a message" />
                <SendButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M17.7825 0.21751C17.6813 0.116765 17.5534 0.0470131 17.4139 0.0164552C17.2744 -0.0141027 17.1291 -0.0041961 16.995 0.0450103L0.495001 6.04501C0.352702 6.09898 0.230191 6.19497 0.143739 6.32023C0.0572872 6.44548 0.0109863 6.59407 0.0109863 6.74626C0.0109863 6.89845 0.0572872 7.04704 0.143739 7.17229C0.230191 7.29755 0.352702 7.39354 0.495001 7.44751L6.9375 10.02L11.6925 5.25001L12.75 6.30751L7.9725 11.085L10.5525 17.5275C10.6081 17.6671 10.7043 17.7867 10.8286 17.8709C10.953 17.9552 11.0998 18.0002 11.25 18C11.4016 17.9969 11.5486 17.9479 11.6718 17.8596C11.795 17.7712 11.8885 17.6476 11.94 17.505L17.94 1.00501C17.9911 0.872318 18.0034 0.727833 17.9755 0.588403C17.9477 0.448973 17.8807 0.320343 17.7825 0.21751Z" fill="#D84D4D"/>
                    </svg>
                </SendButton>
            </Footer>
        </ContainerFooter>
        
    )
}

export default ChatFooter