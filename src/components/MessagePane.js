import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessagesPane = () => {
    const [messages, setMessages] = useState([]);
    const senderId = sessionStorage.getItem('id');
    const receiverId = '2';
    
    useEffect(() => {
        axios.get(`http://localhost:5000/get_messages?sender_id=${senderId}&receiver_id=${receiverId}`)
            .then(response => setMessages(response.data))
            .catch(error => console.error(error));
    }, [senderId, receiverId]);

    return (
        <div>
            {messages.map(msg => (
                <div key={msg.id}>
                    <p><strong>{msg.sender_id}</strong>: {msg.message}</p>
                    <small>{new Date(msg.timestamp).toLocaleString()}</small>
                </div>
            ))}
        </div>
    );
};

export default MessagesPane;
