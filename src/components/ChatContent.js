import React, { useState, useEffect } from "react";
import "./ChatContent.css";
import ChatItem from "./ChatItem";
import attachment from "../pics/attachment.png";
import emoji from "../pics/emoji.png";
import send from "../pics/send.png";
import userDefault from '../pics/user_default.jpg';
import axios from "axios";
const ChatContent = () => {
  /*
  const chatItems = [
    {
      key: 1,
      image:
        userDefault,
      type: "",
      msg: "Hi Henry!!"
    },
    {
      key: 2,
      image:
      userDefault,
      type: "",
      msg: "How can I help you today?"
    },
    {
      key: 3,
      image:
      userDefault,
      type: "other",
      msg: "Hey Bill, nice to meet you!"
    },
    {
      key: 4,
      image:
      userDefault,
      type: "other",
      msg: "Hope you're doing fine."
    },
    {
      key: 5,
      image:
      userDefault,
      type: "",
      msg: "I'm good thanks for asking."
    },
    {
      key: 6,
      image:
      userDefault,
      type: "other",
      msg:
        "I am interested to know more about your prices and services you offer"
    },
    {
      key: 7,
      image:
      userDefault,
      type: "",
      msg:
        "Sure, please check below link to find more http://mazepixel.com/portfolio"
    },
    {
      key: 8,
      image:
      userDefault,
      type: "other",
      msg:
        "Awesome, will get in touch if there's anything unclear, Thanks for now!"
    },
    {
      key: 9,
      image:
      userDefault,
      type: "other",
      msg: "Have a great day!"
    },
    {
      key: 10,
      image:
      userDefault,
      type: "",
      msg: "Thanks buddy, you too as well"
    }
  ];*/

  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  //const [chat, setChat] = useState(chatItems);
  const senderId = sessionStorage.getItem('id');
  const receiverId = '2';
  /*
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        if (msg !== "") {
          chatItems.push({
            key: 1,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
            type: "",
            msg: msg
          });
          setChat([...chatItems]);
          setMsg("");
        }
      }
    });
  }, [msg, chat, chatItems]);
  */
  useEffect(() => {
    //window.addEventListener("keydown", (e) => {
      const fetched = () => {
      axios.get(`http://localhost:5000/get_messages?sender_id=${senderId}&receiver_id=${receiverId}`)
            .then(response => setMessages(response.data))
            .catch(error => console.error(error));
      /*if (e.keyCode === 3) {
        if (msg !== "") {
          chatItems.push({
            key: 1,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
            type: "",
            msg: msg
          });
          setChat([...chatItems]);
          setMsg("");
        }
      }*/
        //setMessages("");
      };
      fetched();
    //});
  }, [senderId, receiverId]);
  /*const sendClicked = () => {
    if (msg !== "") {
      chatItems.push({
        key: 1,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
        type: "",
        msg: msg
      });
      setChat([...chatItems]);
      setMsg("");
    }
  };*/
  return (
    <>
    {/*<div className="main__chatcontent">
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
          <button className="btnSendMsg" id="sendMsgBtn">
          
            <p>Send</p>
            <img src={send} style={{ maxWidth: "1em" }} alt="send" />
          </button>
        </div>
      </div>
    </div>*/}

    <div className="main__chatcontent">
      <div className="content__body">
        <div className="chat__items">
          {messages.map((message, index) => (
            
              <ChatItem
                animationDelay={index + 2}
                key={message.id}
                user={message.sender_id === sessionStorage.getItem('id') ? 'me' : 'other' }
                msg={message.message}
                time={new Date(message.timestamp).toLocaleString()}
                image={userDefault}
              />
            
          ))}
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
          <button className="btnSendMsg" id="sendMsgBtn">
          
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
