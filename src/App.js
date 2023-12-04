import {React, useState} from 'react';
import {GlobalStyle} from './style'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConversationPage from './pages/conversation-page';
import ChatPage from './pages/chat-page';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ConversationPage/>}/>
        <Route path="/chat/:id/:nombre" element={<ChatPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
