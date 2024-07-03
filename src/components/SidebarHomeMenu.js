import TopbarDashboard from "./TopbarDashboard";

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
  faUserFriends,
  faChartLine,
  faCircleExclamation,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBFile
  } from 'mdb-react-ui-kit';

import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link, Outlet, useNavigate } from "react-router-dom";

import './SidebarHomeMenu.css'
import Logo from '../pics/4.png'
function SidebarHomeMenu({ isOpen, toggle }) {

    const navigate = useNavigate()
    const handleHomeToTicket = () => {
        // Realizar lógica de autenticación aquí
    
        // Redirigir al componente Home después de iniciar sesión
        navigate("/tickets_home");
    };

    return (
        <>
        
        <div className={classNames("sidebar", { "is-open": isOpen })}>
            
            <div className="sidebar-header">
            
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                    &times;
                </span>
                {/*<img src={Logo} width="200" height="150"/> */}
                <MDBCardImage
                                src={Logo}
                                alt="avatar"
                                
                                style={{ width: '180px' }}
                                fluid />
            </div>
            <div className="side-menu">
                <Nav vertical className="custom-nav">
                    <p>Menu</p>
                    <NavItem>
                        <NavLink tag={Link} to={"/home"}>
                            <FontAwesomeIcon icon={faDashboard} className="mr-1" />
                            {"              "} Dashboard
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        
                        <NavLink tag={Link} to="tickets_home" activeClassName="active" className="nav-link">
                            <FontAwesomeIcon icon={faTicket} className="mr-2" />
                            {"              "} Tickets
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"chats"}>
                            <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
                            {"              "} QuickChat
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/pages"} >
                            <FontAwesomeIcon icon={faList} className="mr-2" />
                            {"              "} Areas
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"users"}>
                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                            {"              "} Usuarios
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"reports"}>
                            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                            {"              "} Reportes
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/contact"}>
                            <FontAwesomeIcon icon={faCircleExclamation} className="mr-2" />
                            {"              "} Problemas
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"ticketsTab"}>
                            <FontAwesomeIcon icon={faGears} className="mr-2" />
                            {"              "} Configuracion
                        </NavLink>
                    </NavItem>
                    
                </Nav>
                
            </div>
            
        </div>
    </>
    );
}
export default SidebarHomeMenu;
