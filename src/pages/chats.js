import React, { useState, useEffect } from 'react';
import SendMessage from '../components/SendMessagePane';
import MessagesPane from '../components/MessagePane';
//import ChatContent from '../components/example';
import ChatContent from '../components/ChatContent';
import './chats.css';
import axios from 'axios';

const Chats = () => {
  

  return (
    
    <div>
       <ChatContent ></ChatContent>
       <MessagesPane/>
        <SendMessage/>
    </div>
   
);
};

export default Chats;