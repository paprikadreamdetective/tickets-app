import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import './SidebarHomeMenu.css'

function SidebarHomeMenu({ isOpen, toggle }) {
    return (
        <div className={classNames("sidebar", { "is-open": isOpen })}>
            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                    &times;
                </span>
                <h3>Sidebar</h3>
            </div>
            <div className="side-menu">
                <Nav vertical className="list-unstyled pb-3">
                    <p>Dummy Heading</p>
                    
                    <NavItem>
                    <NavLink tag={Link} to={"/about"}>
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        About
                    </NavLink>
                    </NavItem>
                    
                    <NavItem>
                    <NavLink tag={Link} to={"/pages"}>
                        <FontAwesomeIcon icon={faImage} className="mr-2" />
                        Portfolio
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to={"/faq"}>
                        <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                        FAQ
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to={"/contact"}>
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                        Contact
                    </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    );
}
export default SidebarHomeMenu;
