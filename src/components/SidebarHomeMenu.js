import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faUser,
  faList,
  faCopy,
  faTicket,
  faGears,
  faDashboard,
  faNewspaper
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
                <Nav vertical className="custom-nav">
                    <p>Menu</p>
                    <NavItem>
                        <NavLink tag={Link} to={"/about"}>
                            <FontAwesomeIcon icon={faDashboard} className="mr-1" />
                            Dashboard
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/about"}>
                        
                            <FontAwesomeIcon icon={faTicket} className="mr-1" />
                            Tickets
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/contact"}>
                            <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
                            Tipos de requerimientos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/pages"}>
                            <FontAwesomeIcon icon={faList} className="mr-2" />
                            Areas
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/faq"}>
                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                            Usuarios
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/contact"}>
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                            Contacto
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/settings"}>
                            <FontAwesomeIcon icon={faGears} className="mr-2" />
                            Configuracion
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    );
}
export default SidebarHomeMenu;
