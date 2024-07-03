import React from "react";
import './ChatContent.css';

import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse,
    MDBBtn,
    MDBCardImage
  } from 'mdb-react-ui-kit';

const ChatItem = (props) => {
  return (
    <>
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

      <div >
        {/*<div className="avatar-img">*/}
          {/*<img src={props.image} alt="#" />*/}
          <MDBCardImage
                            style={{ width: '50px' }}
                            className="rounded-circle"
                            src={props.image}
                            alt='Generic placeholder image'
                            fluid >
                    </MDBCardImage>
        {/*</div>*/}
        <span className={`isOnline ${"active"}`}></span>
      </div>
    </div>
    </>
  );
};
export default ChatItem;