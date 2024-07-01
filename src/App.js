
import SignIn from './pages/sign_in';
import Home from './pages/home';
import Tickets from './pages/tickets_home';
import ReporteTabla from './pages/reports';
import Charts from './pages/dashboard';
import SignInImpostor from './pages/sign_in_impostor';
import Dashboard from './pages/best_dashboard';
import UsersPage from './pages/users';

import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion';
import './App.css';



function App(){

  const data = [
    { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com", noTicket: "001", asunto: "Problema de acceso", area: "Soporte Técnico", estado: "Abierto" },
    { id: 2, nombre: "María Gómez", email: "maria.gomez@example.com", noTicket: "002", asunto: "Consulta de facturación", area: "Finanzas", estado: "Cerrado" },
    { id: 3, nombre: "Carlos Ruiz", email: "carlos.ruiz@example.com", noTicket: "003", asunto: "Error en el sistema", area: "Desarrollo", estado: "En progreso" },
    { id: 4, nombre: "Ana López", email: "ana.lopez@example.com", noTicket: "004", asunto: "Solicitud de soporte", area: "Atención al Cliente", estado: "Abierto" },
    { id: 5, nombre: "Luis Fernández", email: "luis.fernandez@example.com", noTicket: "005", asunto: "Cambio de contraseña", area: "Soporte Técnico", estado: "Cerrado" },
    { id: 6, nombre: "Laura Martínez", email: "laura.martinez@example.com", noTicket: "006", asunto: "Actualización de datos", area: "Recursos Humanos", estado: "En progreso" },
  ];
  
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Obtén el rol del usuario de sessionStorage
    setUserRole(sessionStorage.getItem('role'));
  }, []);

  

  return (
   
    <BrowserRouter>
      <LayoutGroup>
          <Routes>
            <Route path="/" element={<SignIn />}/>
                <Route exact path="home" element={<Home />}>
                  <Route path="tickets_home" element={<Tickets />} />
                  <Route path="reports" element={<ReporteTabla data={data} />} />
                  <Route index element={<Dashboard/>}/>
                  <Route path="users" element={<UsersPage/>}/>
                </Route>
              <Route path="/impostor" element={<SignInImpostor/>}/>
          </Routes>
      </LayoutGroup>
    </BrowserRouter>
    
  );
}

export default App;
