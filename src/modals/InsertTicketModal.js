import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserEdit,  faTimes, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import {
    Table,
    Button,
    Input,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
    Row, 
    Col
  } from "reactstrap";
import './InsertTicketModal.css';


const InsertTicketModal = ( { show, cancel } ) => {

    const [modalInsertar, setModalInsertar] = useState(false);

    const [asuntoTicket, setAsuntoTicket] = useState('');
    const [descrTicket, setDescrTicket] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');
    const [categoriaTicket, setCategoriaTicket] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [estadoTicket, setEstadoTicket] = useState();
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);

    const mostrarModalInsertar = (arg) => {
        setModalInsertar(arg);
    };
    
    const cerrarModalInsertar = (arg) => {
        setModalInsertar(arg);
    };

    const handleInsertTicket = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('asunto_ticket', asuntoTicket);
        formData.append('descripcion_ticket', descrTicket);
        formData.append('fecha_creacion', fechaCreacion);
        formData.append('categoria_ticket', categoriaTicket);
        formData.append('id_usuario', sessionStorage.getItem('id'));
        formData.append('id_estado', 1);
        if (file) {
            formData.append('file', file);
        }
        try {
            /*const data = {
                asunto_ticket: asuntoTicket,
                descripcion_ticket: descrTicket,
                fecha_creacion: fechaCreacion,
                categoria_ticket: categoriaTicket,
                id_usuario: sessionStorage.getItem('id'),
                id_estado: 1
              };*/
            /*const response = await fetch('http://localhost:5000/add_ticket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            });*/
            // Verificar si la respuesta es JSON
            
            const response = await fetch('http://localhost:5000/add_ticket', {
                method: 'POST',
                body: formData,
              });
              /*const contentType = response.headers.get("content-type");
              if (!contentType || !contentType.includes("application/json")) {
                throw new TypeError("La respuesta no es JSON");
              }*/
            const responseData = await response.json();
            console.log(response.message)
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        setFilePreview(URL.createObjectURL(file));
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
        <Modal isOpen={show} className="insert-ticket-modal" size="lg">
            <ModalHeader>
                <div>
                    <h3>Generar Ticket</h3>
                </div>
            </ModalHeader>

            <ModalBody>
            <Row form>
                <Col md={6}>
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
                </Col>
                <Col md={6}>
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
                </Col>
            </Row>
            <Row form>    
                <Col md={6}>
                
                <FormGroup>
                        <label>Descripcion:</label>
                        <Input
                        style={{ height: '150px', textAlign: 'left', verticalAlign: 'top' }}
                        className="form-control"
                        name="anime"
                        type="textarea"
                        value={descrTicket}
                        onChange={(e) => setDescrTicket(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                <label>Adjuntar archivo:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                {filePreview && (
                <div className="mt-2">
                  <img src={filePreview} alt="Vista previa" style={{ width: '100%', maxHeight: '200px' }} />
                </div>
              )}
                </FormGroup>
                </Col>
            </Row>

            </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleInsertTicket}>Insertar</Button>
          <Button className="btn btn-danger" onClick={cancel}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    );
}

export default InsertTicketModal;