import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChatContent.css";
import ChatItem from "./ChatItem";
import attachment from "../pics/attachment.png";
import emoji from "../pics/emoji.png";
import send from "../pics/send.png";
import userDefault from '../pics/user_default.jpg';

const ChatContent = ({ senderId, receiverId }) => {
    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState([]);

  // Obtener mensajes desde el servidor
    useEffect(() => {
    axios.get(`http://localhost:5000/get_messages?sender_id=${senderId}&receiver_id=${receiverId}`)
        .then(response => setChat(response.data))
        .catch(error => console.error(error));
    }, [senderId, receiverId]);

    useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && msg !== "") {
        const newMessage = {
            key: chat.length + 1,
            image: userDefault,
            type: "",
            msg: msg
        };
        setChat([...chat, newMessage]);
        setMsg("");
        }
    };
    // al momento de que se llama esta llav elo que se hace es pedir la 
    // consulta hacia el servidor para obtener la informacion 
    // y poder dar la vista al usuario.
    
    window.addEventListener("keydown", handleKeyDown);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [msg, chat]);

    const sendClicked = () => {
        if (msg !== "") {
            const newMessage = {
            key: chat.length + 1,
            image: userDefault,
            type: "",
            msg: msg
            };
            setChat([...chat, newMessage]);
            setMsg("");
        }
    };

    return (
        <>
            <div className="main__chatcontent">
                <div className="content__body">
                    <div className="chat__items">
                        {chat.map((itm, index) => {
                            return (
                            <ChatItem
                                animationDelay={index + 2}
                                key={itm.key}
                                user={itm.type ? itm.type : "me"}
                                msg={itm.msg}
                                image={itm.image}
                            />
                            );
                        })}
                    </div>
                </div>
                <div className="content__footer">
                    <div className="sendNewMessage">
                        <img src={attachment} style={{ maxWidth: "1.7em" }} alt="attach" />
                        <div className="inputField">
                            <input
                            type="text"
                            placeholder="Enter your message here"
                            value={msg}
                            onChange={(e) => {
                                setMsg(e.target.value);
                            }}
                            />
                            <img style={{ maxWidth: "1.2em" }} src={emoji} alt="emoji" />
                        </div>
                        <button onClick={sendClicked} className="btnSendMsg" id="sendMsgBtn">
                            <p>Send</p>
                            <img src={send} style={{ maxWidth: "1em" }} alt="send" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatContent;
