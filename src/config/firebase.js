import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4zxCBOeTFlb9chA2n3IeeuycM8Fk2EnA",
    authDomain: "chat-computo.firebaseapp.com",
    projectId: "chat-computo",
    storageBucket: "chat-computo.appspot.com",
    messagingSenderId: "727577536641",
    appId: "1:727577536641:web:8295328921cbb96e6fc580"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export default db;