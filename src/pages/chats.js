import React, { useState, useEffect } from 'react';
import SendMessage from '../components/SendMessagePane';
import MessagesPane from '../components/MessagePane';
import ChatContent from '../components/example';
import './chats.css';
import axios from 'axios';

const Chats = () => {
  

  return (
    
    <div>
       <ChatContent senderId={'MAD-CDM-100-001'} receiverId={'MAD-CDM-100-002'}></ChatContent>
       <MessagesPane/>
        <SendMessage/>
    </div>
   
);
};

export default Chats;