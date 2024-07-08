import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { motion } from 'framer-motion';
//import { Button, ListGroup } from 'react-bootstrap';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import SidebarHomeUsers from '../components/SidebarHomeMenuUsers';

function HomeUsers () {
    
    return (
      <>
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
        <div>
          <SidebarHomeUsers/>
        </div>
        <div>
          <Outlet/>
        </div>
        </motion.div>
      </>
    );
}

export default HomeUsers;