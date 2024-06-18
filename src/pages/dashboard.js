// src/components/Charts.js
import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import { motion } from 'framer-motion';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const initialData = [
  { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com", noTicket: "001", asunto: "Problema de acceso", area: "Soporte Técnico", estado: "Abierto" },
  { id: 2, nombre: "María Gómez", email: "maria.gomez@example.com", noTicket: "002", asunto: "Consulta de facturación", area: "Finanzas", estado: "Cerrado" },
  { id: 3, nombre: "Carlos Ruiz", email: "carlos.ruiz@example.com", noTicket: "003", asunto: "Error en el sistema", area: "Desarrollo", estado: "En progreso" },
  { id: 4, nombre: "Ana López", email: "ana.lopez@example.com", noTicket: "004", asunto: "Solicitud de soporte", area: "Atención al Cliente", estado: "Abierto" },
  { id: 5, nombre: "Luis Fernández", email: "luis.fernandez@example.com", noTicket: "005", asunto: "Cambio de contraseña", area: "Soporte Técnico", estado: "Cerrado" },
  { id: 6, nombre: "Laura Martínez", email: "laura.martinez@example.com", noTicket: "006", asunto: "Actualización de datos", area: "Recursos Humanos", estado: "En progreso" },
];

const countByStatus = (data) => {
  return data.reduce((acc, curr) => {
    acc[curr.estado] = (acc[curr.estado] || 0) + 1;
    return acc;
  }, {});
};

const statusCounts = countByStatus(initialData);

const barData = {
  labels: Object.keys(statusCounts),
  datasets: [
    {
      label: 'Tickets por estado',
      data: Object.values(statusCounts),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const pieData = {
  labels: Object.keys(statusCounts),
  datasets: [
    {
      label: 'Tickets por estado',
      data: Object.values(statusCounts),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const lineData = {
  labels: Object.keys(statusCounts),
  datasets: [
    {
      label: 'Tickets por estado',
      data: Object.values(statusCounts),
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const Charts = () => {
  return (
    <motion.div 
      style={{ display: 'flex', gap: '20px' }}
      initial={{
        opacity: 0.7,
      }}
      animate={{
          opacity: 1.5,
          transition: { duration: 1.5 },
      }}
      exit={{
          opacity: 0.7,
          transition: { duration: 3.5 },
      }}
    >
      <div style={{ flex: 1 }}>
        <h2>Gráfico de Barras</h2>
        <Bar data={barData} />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Gráfico de Pastel</h2>
        <Pie data={pieData} />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Gráfico de Líneas</h2>
        <Line data={lineData} />
      </div>
    </motion.div>
  );
};

export default Charts;
