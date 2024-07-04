import React, { useState } from 'react';
import axios from 'axios';

const SendMessage = () => {
    const [message, setMessage] = useState('');
    const senderId = sessionStorage.getItem('id');
    const receiverId = '2';
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/send_message', {
            sender_id: senderId,
            receiver_id: receiverId,
            msg: message 
        })
        .then(response => {
            setMessage('');
            console.log(response.data);
        })
        .catch(error => console.error(error));
    };

    return (
        <form >
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} chat-react
                placeholder="Type a message" 
                required 
            />
            <button type="submit" onClick={handleSubmit}>Send</button>
        </form>
    );
};

export default SendMessage;