import React, { useEffect, useState } from 'react'
import ConversationHeader from '../components/conversation-header';
import SearchBar from '../components/search-bar';
import Conversation from '../components/conversation';
import { getDoc, doc, collection, onSnapshot} from 'firebase/firestore';
import db from '../config/firebase';

const usuariosCollection = collection(db, 'usuarios');

function useUsuarios (){
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(usuariosCollection, (snapshot) => {
            const newUsuarios = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setUsuarios(newUsuarios);
        });
        return () => unsubscribe();
    }, []);
    return usuarios;
}

const ConversationPage = () => {
    var usuarios = useUsuarios();

    return (
        <div>
            <ConversationHeader/>
            <SearchBar/>
            {usuarios.map(usuario =>(<Conversation key={usuario.id} name={usuario.nombre} lastMessage="hola" idConversacion={usuario.idConversacion}/>))}
        </div>
    )
}

export default ConversationPage;