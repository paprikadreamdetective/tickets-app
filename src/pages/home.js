import SidebarHomeMenu from "../components/SidebarHomeMenu";
import Content from "../components/ContentTopbar";
import Tickets from "./tickets_home";
import Topbar from "../components/TopbarHome";
import TopbarDashboard from "../components/TopbarDashboard";

import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";


function Home() {

    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(false);
    const [toggled, setToggled] = useState(false);
    const navigate = useNavigate()
    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    };

    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    }; 

    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    useEffect(() => {
        (async () => {
          try {
            const resp = await axios.get("http://localhost:5000/@me");
            navigate('dashboard')
            //setUser(resp.data);
          } catch (error) {
            console.log("Not authenticated");
          }
        })();
    }, []);

    return (
        <>
        
        {/*<TopbarDashboard></TopbarDashboard>*/}
            <motion.div 
                initial={{
                    opacity: 0.7,
                }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.5 },
                }}
                exit={{
                    opacity: 0.7,
                    transition: { duration: 3.5 },
                }}
                
                className="App wrapper">
                    
                    <SidebarHomeMenu toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                    
                    <div className="content">
        <TopbarDashboard></TopbarDashboard>
                    
            
            
            
            {/*<Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />*/}
            
            
                <Outlet />
            </div>
            </motion.div>
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