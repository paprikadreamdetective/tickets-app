// TicketModal.js
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col } from 'reactstrap';
import './TicketUserModal.css';
import placeholderImage from '../pics/placeholder.png'
import { useState } from 'react';
const TicketModal = ({ show, handleClose, ticket }) => {

  const [zoomModalOpen, setZoomModalOpen] = useState(false);

  const toggleZoomModal = () => {
    setZoomModalOpen(!zoomModalOpen);
  };

  if (!ticket) return null; // No renderizar el modal si no hay un ticket seleccionado

  return (
    <>
    <Modal isOpen={show} toggle={handleClose} className="custom-modal" >
      <ModalHeader toggle={handleClose}>Detalles del Ticket</ModalHeader>
      <ModalBody className="custom-modal-body">
      
      <Row>
          <Col md="6">
            <p><strong>ID Ticket:</strong> {ticket.id_ticket}</p>
            <p><strong>Asunto:</strong> {ticket.asunto_ticket}</p>
            <p><strong>Descripción:</strong> {ticket.descripcion_ticket}</p>
            <p><strong>Fecha de Creación:</strong> {ticket.fecha_creacion_ticket}</p>
            <p><strong>Categoría:</strong> {ticket.categoria_ticket}</p>
            <p><strong>Nombre de Usuario:</strong> {ticket.nombre_usuario}</p>
            <p><strong>Nombre de Área:</strong> {ticket.nombre_area}</p>
          </Col>
          <Col md="6" className="text-center">
            {ticket.captura_pantalla_ticket ? (
              <img 
                src={`data:image/jpeg;base64,${ticket.captura_pantalla_ticket}`} 
                alt="Captura de Pantalla" 
                className="ticket-image img-fluid"
                onClick={toggleZoomModal}
                style={{ cursor: 'pointer', maxHeight: '400px' }} 
              />
            ) : (
              <img 
                src={placeholderImage} 
                alt="Archivo no adjunto" 
                className="ticket-image img-fluid" 
                style={{ maxHeight: '400px' }}
              />
            )}
          </Col>
        </Row>

        {/*<p><strong>Asunto:</strong> {ticket.asunto_ticket}</p>
        <p><strong>Descripción:</strong> {ticket.descripcion_ticket}</p>
        <p><strong>Fecha de Creación:</strong> {ticket.fecha_creacion_ticket}</p>
        <p><strong>Categoría:</strong> {ticket.categoria_ticket}</p>
        <p><strong>Nombre de Usuario:</strong> {ticket.nombre_usuario}</p>
        <p><strong>Nombre de Área:</strong> {ticket.nombre_area}</p>*/}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>Cerrar</Button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={zoomModalOpen} toggle={toggleZoomModal} className="zoom-modal" size='xl'>
    <ModalHeader toggle={toggleZoomModal}>Imagen Ampliada</ModalHeader>
    <ModalBody className="text-center">
      {ticket.captura_pantalla_ticket ? (
        <img 
          src={`data:image/jpeg;base64,${ticket.captura_pantalla_ticket}`} 
          alt="Captura de Pantalla" 
          className="img-fluid"
          style={{ maxWidth: '100%', maxHeight: '80vh' }}
        />
      ) : (
        <img 
          src={placeholderImage} 
          alt="Archivo no adjunto" 
          className="img-fluid"
          style={{ maxWidth: '100%',maxHeight: '80vh' }}
        />
      )}
    </ModalBody>
    </Modal>
    </>
  );
};

export default TicketModal;

