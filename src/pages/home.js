import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import SidebarHomeMenu from "../components/SidebarHomeMenu";
import Content from "../components/ContentTopbar";
import Tickets from "./tickets_home";

function Home() {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <>
            <div className="App wrapper">
            <SidebarHomeMenu toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            {/*<Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />*/}
            <div className="content">
                <Outlet />
            </div>
            </div>
        </>
    );
}

export default Home;


/*<div className="App wrapper">
            
                <div style={{ display: 'flex' }}>
                <SidebarHomeMenu toggle={toggleSidebar} isOpen={sidebarIsOpen}>
                    <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                    
                    </div>
                    </SidebarHomeMenu>
                </div>
        
            
            <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </div>*/
/*
        <div className="App wrapper">
        <div style={{ display: 'flex' }}>
            <SidebarHomeMenu toggle={toggleSidebar} isOpen={sidebarIsOpen}>
            <div style={{ marginLeft: sidebarIsOpen ? '250px' : '0', padding: '20px', width: '100%' }}>
                <Outlet />
            </div>
            </SidebarHomeMenu>
        </div>
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
    </div>*/