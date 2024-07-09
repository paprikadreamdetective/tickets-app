// TicketModal.js
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import './TicketUserModal.css';
const TicketModal = ({ show, handleClose, ticket }) => {
  if (!ticket) return null; // No renderizar el modal si no hay un ticket seleccionado

  return (
    <Modal isOpen={show} toggle={handleClose} className="custom-modal" >
      <ModalHeader toggle={handleClose}>Detalles del Ticket</ModalHeader>
      <ModalBody className="custom-modal-body">
      {ticket.captura_pantalla_ticket && (
          <img 
            src={`data:image/jpeg;base64,${ticket.captura_pantalla_ticket}`} 
            alt="Captura de Pantalla" 
            className="ticket-image" 
          />
        )}
        <p><strong>ID Ticket:</strong> {ticket.id_ticket}</p>
        <p><strong>Asunto:</strong> {ticket.asunto_ticket}</p>
        <p><strong>Descripción:</strong> {ticket.descripcion_ticket}</p>
        <p><strong>Fecha de Creación:</strong> {ticket.fecha_creacion_ticket}</p>
        <p><strong>Categoría:</strong> {ticket.categoria_ticket}</p>
        <p><strong>Nombre de Usuario:</strong> {ticket.nombre_usuario}</p>
        <p><strong>Nombre de Área:</strong> {ticket.nombre_area}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>Cerrar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default TicketModal;

