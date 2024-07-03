import React from "react";

const ChatItem = (props) => {
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${props.user ? props.user : ""}`}
    >
      <div>
        <div className="chat__item__content">
          <div className="chat__msg">{props.msg}</div>
        </div>
        <div className="chat__meta">
          <span>9h ago</span>
        </div>
      </div>

      <div className="avatar">
        <div className="avatar-img">
          <img src={props.image} alt="#" />
        </div>
        <span className={`isOnline ${"active"}`}></span>
      </div>
    </div>
  );
};
export default ChatItem;