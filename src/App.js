import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion';
import './App.css';

import SignIn from './pages/sign_in';
import Home from './pages/home';
import Tickets from './pages/tickets_home';
import ReporteTabla from './pages/reports';
import Charts from './pages/dashboard';
import SignInImpostor from './pages/sign_in_impostor';


function App(){
const data = [
  { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com", noTicket: "001", asunto: "Problema de acceso", area: "Soporte Técnico", estado: "Abierto" },
  { id: 2, nombre: "María Gómez", email: "maria.gomez@example.com", noTicket: "002", asunto: "Consulta de facturación", area: "Finanzas", estado: "Cerrado" },
  { id: 3, nombre: "Carlos Ruiz", email: "carlos.ruiz@example.com", noTicket: "003", asunto: "Error en el sistema", area: "Desarrollo", estado: "En progreso" },
  { id: 4, nombre: "Ana López", email: "ana.lopez@example.com", noTicket: "004", asunto: "Solicitud de soporte", area: "Atención al Cliente", estado: "Abierto" },
  { id: 5, nombre: "Luis Fernández", email: "luis.fernandez@example.com", noTicket: "005", asunto: "Cambio de contraseña", area: "Soporte Técnico", estado: "Cerrado" },
  { id: 6, nombre: "Laura Martínez", email: "laura.martinez@example.com", noTicket: "006", asunto: "Actualización de datos", area: "Recursos Humanos", estado: "En progreso" },
];
  return (
    <BrowserRouter>
      <LayoutGroup>
        
          <Routes>
            <Route path="/" element={<SignIn />}/>
              <Route path="home" element={<Home />}>
                <Route path="tickets_home" element={<Tickets />} />
                <Route path="reports" element={<ReporteTabla data={data} />} />
                <Route path="dashboard" element={<Charts/>}/>
              </Route>
              <Route path="/impostor" element={<SignInImpostor/>}/>
          </Routes>
  
      </LayoutGroup>
    </BrowserRouter>
  );
}

export default App;
