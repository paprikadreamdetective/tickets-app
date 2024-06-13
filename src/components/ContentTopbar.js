import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
//import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

import Topbar from "./TopbarHome";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    
  </Container>
);

export default Content;