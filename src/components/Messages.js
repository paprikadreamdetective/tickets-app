import React, { useState, useEffect } from 'react';
import axios from 'axios';

//const Messages = ({ senderId, receiverId }) => {
const Messages = () => {
    const [messages, setMessages] = useState([]);
    const sender_id = sessionStorage.getItem('id');
    const receiver_id = ''
    useEffect(() => {
        axios.get(`/messages?sender_id=${senderId}&receiver_id=${receiverId}`)
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

export default Messages;