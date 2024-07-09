// src/SidebarHomeUsers.js
import React, { useState } from 'react';
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NavItem, Nav } from "reactstrap";
import { FaHome, FaUser, FaTicketAlt } from 'react-icons/fa';
import Logo from '../pics/4.png';

const SidebarHomeUsers = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState('home');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
  };


  // Función para renderizar el contenido principal según la opción seleccionada
  const renderMainContent = () => {
    switch (selectedOption) {
      case 'home':
        return <h1>Contenido de Home</h1>;
      case 'profile':
        return <h1>Contenido de Perfil</h1>;
      case 'tickets':
        return <h1>Contenido de Configuraciones</h1>;
      default:
        return null;
    }
  };

  return (
    <>
    
    <Box sx={{ display: 'flex' }} >
      <Drawer
        variant="permanent"
        sx={{
          width: isOpen ? 200 : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isOpen ? 200 : 100,
            boxSizing: 'border-box',
            backgroundColor: '#343a40',
            color: 'white',
            zIndex: 1000,
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
            <Box sx={{ marginBottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
            </Box>
          
          <Button
            variant="contained"
            color="primary"
            onClick={toggleSidebar}
            sx={{ marginBottom: '20px', backgroundColor: '#343a40', '&:hover': { backgroundColor: '#343a40' } }}
          >
            {isOpen ? '<' : '>'}
          </Button>
          <List>
            <ListItem button component={NavLink} to="/HomeUsers" >
              <ListItemIcon sx={{ color: 'white' }}>
                <FaHome size={40} />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Home" />}
            </ListItem>
            <ListItem button component={NavLink} to="ProfileUser" >
              <ListItemIcon sx={{ color: 'white' }}>
                <FaUser size={40} />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Perfil" />}
            </ListItem>
            <ListItem button component={NavLink} to="TicketsUser" >
              <ListItemIcon sx={{ color: 'white' }}>
                <FaTicketAlt size={40} />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Tickets" />}
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, padding: '30px', transition: 'margin-left 0.3s' }}>
        {/* El contenido principal se renderizará automáticamente según la ruta */}
      </Box>
    </Box>
    
    </>
  );
};

export default SidebarHomeUsers;
