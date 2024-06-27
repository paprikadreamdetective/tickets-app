import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import './tickets_home.css'
import axios from "axios";
const initialData = [
    { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com", noTicket: "001", asunto: "Problema de acceso", area: "Soporte Técnico", estado: "Abierto" },
    { id: 2, nombre: "María Gómez", email: "maria.gomez@example.com", noTicket: "002", asunto: "Consulta de facturación", area: "Finanzas", estado: "Cerrado" },
    { id: 3, nombre: "Carlos Ruiz", email: "carlos.ruiz@example.com", noTicket: "003", asunto: "Error en el sistema", area: "Desarrollo", estado: "En progreso" },
    { id: 4, nombre: "Ana López", email: "ana.lopez@example.com", noTicket: "004", asunto: "Solicitud de soporte", area: "Atención al Cliente", estado: "Abierto" },
    { id: 5, nombre: "Luis Fernández", email: "luis.fernandez@example.com", noTicket: "005", asunto: "Cambio de contraseña", area: "Soporte Técnico", estado: "Cerrado" },
    { id: 6, nombre: "Laura Martínez", email: "laura.martinez@example.com", noTicket: "006", asunto: "Actualización de datos", area: "Recursos Humanos", estado: "En progreso" },
  ];

const Tickets = () => {
  const [data, setData] = useState(initialData);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  
  
  const [form, setForm] = useState({
    id: "",
    personaje: "",
    anime: "",
  });

  const mostrarModalActualizar = (dato) => {
    setForm(dato);
    setModalActualizar(true);
  };

  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };
  
  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  const editar = (dato) => {
    const updatedData = data.map((registro) =>
      registro.id === dato.id ? dato : registro
    );
    setData(updatedData);
    setModalActualizar(false);
  };

  const eliminar = (dato) => {
    const opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
    if (opcion) {
      const updatedData = data.filter((registro) => registro.id !== dato.id);
      setData(updatedData);
    }
  };
  /*
  const insertar = () => {
    const valorNuevo = { ...form, id: data.length + 1 };
    setData([...data, valorNuevo]);
    setModalInsertar(false);
  };*/

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const [selectedData, setSelectedData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

    const handleRowClick = (dato) => {
        setSelectedData(dato);
        toggleModal();
    };

    const [tickets, setTickets] = useState([]);
    const [asuntoTicket, setAsuntoTicket] = useState('');
    const [descrTicket, setDescrTicket] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');
    const [categoriaTicket, setCategoriaTicket] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [estadoTicket, setEstadoTicket] = useState();

    const handleInsertTicket = async (e) => {
      e.preventDefault();
  
      const data = {
        asunto_ticket: asuntoTicket,
        descripcion_ticket: descrTicket,
        fecha_creacion: fechaCreacion,
        categoria_ticket: categoriaTicket,
        id_usuario: idUsuario,
        id_estado: estadoTicket
      };
  
      // Enviar los datos al servidor Flask
      try {
        const response = await fetch('http://localhost:5000/add_ticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        const responseData = await response.json();
        console.log('Respuesta del servidor:', responseData);
        // Manejar la respuesta del servidor como sea necesario
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    };

    const handleDeleteTicket = (id) => {
      const option = window.confirm("¿Estás seguro de eliminar este usuario?");
      if (option) {
          axios.post(`http://localhost:5000/remove_ticket/${id}`)
          .then(response => {
          console.log(response.data.message);
          setTickets(tickets.filter(ticket => ticket.id !== id));
          }).catch(error => console.error('Error al eliminar usuario:', error));
      }
  };

    useEffect(() => {
      fetch('http://localhost:5000/get_tickets')  
          .then(response => response.json())
          .then(data => setTickets(data))
          .catch(error => console.error('Error fetching users:', error));
    }, []);

  return (
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
    <br />
        <Button color="success" onClick={mostrarModalInsertar}>Crear Ticket</Button>
        <br />
        <br />
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="table-container">
        <Table responsive hover className="table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>No°Ticket</th>
              <th>Asunto</th>
              <th>Area</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {data.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id_ticket}</td>
                <td>{ticket.asunto_ticket}</td>
                <td>{ticket.descripcion_ticket}</td>
                <td>{ticket.fecha_creacion}</td>
                <td>{ticket.categoria_ticket}</td>
                <td>{ticket.nombre_usuario}</td>
                <td>{ticket.estado_actual}</td>
                <td>
                  <Button color="primary" onClick={() => mostrarModalActualizar()}>
                    Editar
                  </Button>{" "}
                  <Button color="danger" onClick={() => handleDeleteTicket(ticket.id_ticket)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>

        </Table>
        </div>

      </Container>

      <Modal isOpen={modalActualizar}>
        <ModalHeader>
          <div><h3>Editar Registro</h3></div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" value={form.id} />
          </FormGroup>

          <FormGroup>
            <label>Personaje:</label>
            <input
              className="form-control"
              name="personaje"
              type="text"
              onChange={handleChange}
              value={form.personaje}
            />
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              onChange={handleChange}
              value={form.anime}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => editar(form)}>Editar</Button>
          <Button color="danger" onClick={cerrarModalActualizar}>Cancelar</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div><h3>Nuevo Ticket</h3></div>
        </ModalHeader>

        <ModalBody>
          {/*<FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" value={data.length + 1} />
          </FormGroup>*/}

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
            <label>Email:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              value={descrTicket}
              onChange={(e) => setDescrTicket(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Asunto:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              value={fechaCreacion}
              onChange={(e) => setFechaCreacion(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Descripcion:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              value={categoriaTicket}
              onChange={(e) => setCategoriaTicket(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Area:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              value={estadoTicket}
              onChange={(e) => setEstadoTicket(e.target.value)}
            />
          </FormGroup>

        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleInsertTicket}>Insertar</Button>
          <Button className="btn btn-danger" onClick={cerrarModalInsertar}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </motion.div>
  );
};

export default Tickets;
