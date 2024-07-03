import React, { useState } from 'react';
import axios from 'axios';

const SendMessage = () => {
    const [message, setMessage] = useState('');
    const senderId = sessionStorage.getItem('id');
    const receiverId = 'MAD-CDM-100-001';
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:500/send_message', {
            sender_id: senderId,
            receiver_id: receiverId,
            message
        })
        .then(response => {
            setMessage('');
            console.log(response.data);
        })
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Type a message" 
                required 
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default SendMessage;