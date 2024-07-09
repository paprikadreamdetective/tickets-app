import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserEdit,  faTimes, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
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

const InsertTicketModal = ( { show, cancel } ) => {

    const [modalInsertar, setModalInsertar] = useState(false);

    const [asuntoTicket, setAsuntoTicket] = useState('');
    const [descrTicket, setDescrTicket] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');
    const [categoriaTicket, setCategoriaTicket] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [estadoTicket, setEstadoTicket] = useState();

    const mostrarModalInsertar = (arg) => {
        setModalInsertar(arg);
    };
    
    const cerrarModalInsertar = (arg) => {
        setModalInsertar(arg);
    };

    const handleInsertTicket = async (e) => {
        e.preventDefault();
        try {
            const data = {
                asunto_ticket: asuntoTicket,
                descripcion_ticket: descrTicket,
                fecha_creacion: fechaCreacion,
                categoria_ticket: categoriaTicket,
                id_usuario: sessionStorage.getItem('id'),
                id_estado: 1
              };
            const response = await fetch('http://localhost:5000/add_ticket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            });
            const responseData = await response.json();
            if (responseData.success) {
                window.confirm(responseData.message);
                cerrarModalInsertar(cancel);
            } else {
                window.confirm(responseData.message);
                cerrarModalInsertar(cancel);
            }
        } catch (error) {
            window.confirm(error);
            cerrarModalInsertar();
        }
    };

    useEffect(() => {
        const today = new Date();
        // Formatear la fecha
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setFechaCreacion(formattedDate);
        console.log(fechaCreacion);
    }, []);

    return (
        <Modal isOpen={show}>
            <ModalHeader>
                <div><h3>Nuevo Ticket</h3></div>
            </ModalHeader>

            <ModalBody>
            

                <FormGroup>
                    <label>Asunto:</label>
                    <input
                    className="form-control"
                    name="personaje"
                    type="text"
                    value={asuntoTicket}
                    onChange={(e) => setAsuntoTicket(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <label>Descripcion:</label>
                    <input
                    className="form-control"
                    name="anime"
                    type="text"
                    value={descrTicket}
                    onChange={(e) => setDescrTicket(e.target.value)}
                    />
                </FormGroup>

            

                <FormGroup>
                    <label>Categoria:</label>
                    <input
                    className="form-control"
                    name="anime"
                    type="text"
                    value={categoriaTicket}
                    onChange={(e) => setCategoriaTicket(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <label>Estado:</label>
                    <input
                    className="form-control"
                    name="anime"
                    type="numeric"
                    value={estadoTicket}
                    onChange={(e) => setEstadoTicket(e.target.value)}
                    />
                </FormGroup>

            </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleInsertTicket}>Insertar</Button>
          <Button className="btn btn-danger" onClick={cancel}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    );
}

export default InsertTicketModal;