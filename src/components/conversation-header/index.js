import {React, useState} from 'react'
import {Header, ModalContainer, ModalBackground, Container} from './style'
import { collection, addDoc } from 'firebase/firestore';
import db from '../../config/firebase';


const addConversation = (e) => {
    e.preventDefault()
    const nombre = e.target[0].value
    e.target[0].value = ""

    async function addConversationFirebase(nombre) {
        const docRef = await addDoc(collection(db, "conversaciones"), {
            mensajes: [], 
        });
        const id = docRef.id
        await addDoc(collection(db, "usuarios"), {
            nombre: nombre,
            idConversacion: id
        });
    }
    addConversationFirebase(nombre);
}


const Modal = ({show, onClose}) => {
    if(!show){
        return null
    }
    else{
        return (
            <Container>
                <ModalBackground onClick={onClose}/>
                <ModalContainer>
                    <h1>Crear Nueva Conversacion</h1>
                    <form onSubmit={addConversation}>
                        <input type="text" placeholder="Write the name of your contact"/>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 10H17V7H14V5H17V2H19V5H22V7H19V10Z" fill="#0F1828"/>
                                <path d="M21 12H19V15H8.334C7.90107 14.9988 7.47964 15.1393 7.134 15.4L5 17V5H12V3H5C3.89543 3 3 3.89543 3 5V21L7.8 17.4C8.14582 17.1396 8.56713 16.9992 9 17H19C20.1046 17 21 16.1046 21 15V12Z" fill="#0F1828"/>
                            </svg>   
                        </button>
                    </form>  
                </ModalContainer>
            </Container>            
        )
    }
}

const ConversationHeader = () => {
    const [showModal, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }

    return (
        <Header>
            <h1>Conversaciones</h1>
            <a onClick={() => setShow(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 10H17V7H14V5H17V2H19V5H22V7H19V10Z" fill="#0F1828"/>
                    <path d="M21 12H19V15H8.334C7.90107 14.9988 7.47964 15.1393 7.134 15.4L5 17V5H12V3H5C3.89543 3 3 3.89543 3 5V21L7.8 17.4C8.14582 17.1396 8.56713 16.9992 9 17H19C20.1046 17 21 16.1046 21 15V12Z" fill="#0F1828"/>
                </svg>
            </a>
            <Modal show = {showModal} onClose={handleClose}/>
        </Header>
    )
}

export default ConversationHeader