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
  faNewspaper,
  faChartLine,
  faCircleExclamation
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link, Outlet, useNavigate } from "react-router-dom";

import './SidebarHomeMenu.css'

function SidebarHomeMenu({ isOpen, toggle }) {

    const navigate = useNavigate()
    const handleHomeToTicket = () => {
        // Realizar lógica de autenticación aquí
    
        // Redirigir al componente Home después de iniciar sesión
        navigate("/tickets_home");
    };

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
                        <NavLink tag={Link} to={"/dashboard"}>
                            <FontAwesomeIcon icon={faDashboard} className="mr-1" />
                            Dashboard
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        
                        <NavLink tag={Link} to="tickets_home" activeClassName="active" className="nav-link">
                            <FontAwesomeIcon icon={faTicket} className="mr-2" />
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
                        <NavLink tag={Link} to={"/pages"} >
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
                            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                            Reportes
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/contact"}>
                            <FontAwesomeIcon icon={faCircleExclamation} className="mr-2" />
                            Problemas
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
