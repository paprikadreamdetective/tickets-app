import TicketModal from "../modals/TicketUserModal";
import InsertTicketModal from "../modals/InsertTicketModal";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit,  faTimes, faTicket, faPlusCircle, faEye } from '@fortawesome/free-solid-svg-icons';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
    Row, 
    Col
  } from "reactstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function TicketsUser () {
    const [tickets, setTickets] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalInsertTicket, setModalInsertTicket] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
    
    const [modalInsertar, setModalInsertar] = useState(false);

    const handleShowModal = (ticket) => {
        setSelectedTicket(ticket);
        setShowModal(true);
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedTicket(null);
    };

    const mostrarModalInsertar = () => {
        setModalInsertar(true);
    };
    
    const cerrarModalInsertar = () => {
        setModalInsertar(false);
    };
   

    useEffect(() => {
        fetch('http://localhost:5000/get_tickets')  
            .then(response => response.json())
            .then(data => setTickets(data))
            .catch(error => console.error('Error fetching users:', error));
      }, []);

    return (
        <>
            <motion.div
                initial={{
                    opacity: 0.2,
                }}
                animate={{
                    opacity: 5.5,
                    transition: { duration: 1.5 },
                }}
                exit={{
                    opacity: 0.7,
                    transition: { duration: 3.5 },
                }}
                >
                <h1>Tickets de Usuario</h1>

                <Container>
                    <h3>Tickets</h3>
                </Container>
                <Container>
                    <Button color="success"  onClick={mostrarModalInsertar}>
                    <FontAwesomeIcon icon={faPlusCircle} /> {" "} Nuevo Ticket
                    </Button>
                </Container>
                <Container className="d-flex justify-content-center align-items-center min-vh-10">
                    <div className="tickets-table-container">
                    <Table striped responsive hover className="tickets-table-responsive">
                    <thead className="tickets-table-thead">
                        <tr>
                        <th>No°Ticket</th>
                        <th>Asunto</th>
                        <th>Descripcion</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tickets.filter(ticket => ticket.id_usuario === sessionStorage.getItem('id')).map((ticket) => (
                        <tr key={ticket.id}>
                            <td>{ticket.id_ticket}</td>
                            <td>{ticket.asunto_ticket}</td>
                            <td>{ticket.descripcion_ticket}</td>
                            <td>{ticket.fecha_creacion_ticket}</td>
                            <td>{ticket.estado_actual}</td>
                            <td>
                                <Button color="primary" onClick={() => handleShowModal(ticket)}>
                                    <FontAwesomeIcon icon={faEye} /> {" "} Ver más
                                </Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>

                    </Table>
                    </div>
                    <TicketModal show={showModal} handleClose={handleCloseModal} ticket={selectedTicket}/>
                </Container>
                
            </motion.div>
            
            <InsertTicketModal show={modalInsertar} cancel={cerrarModalInsertar} />
        </>
    );
}

export default TicketsUser;