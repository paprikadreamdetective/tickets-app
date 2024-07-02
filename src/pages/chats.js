import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chats = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [adminId, setAdminId] = useState(null);

  useEffect(() => {
    // Obtener mensajes al cargar el componente
    axios.get(`/messages/${userId}`)
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });

    // Obtener el ID del administrador
    axios.get('/users/admin')
      .then(response => {
        setAdminId(response.data.id);
      })
      .catch(error => {
        console.error('Error fetching admin:', error);
      });
  }, [userId]);

  const sendMessage = () => {
    axios.post('/messages', {
      sender_id: userId,
      receiver_id: adminId,
      content: message
    })
    .then(response => {
      setMessages([...messages, { sender_id: userId, receiver_id: adminId, content: message, timestamp: new Date() }]);
      setMessage('');
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
  };

  return (
    <div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender_id === userId ? 'sent' : 'received'}`}>
            <p>{msg.content}</p>
            <span>{new Date(msg.timestamp).toLocaleString()}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chats;