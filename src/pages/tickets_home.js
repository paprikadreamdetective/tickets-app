import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit,  faTimes, faTicket, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
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


const Tickets = () => {
  //const [data, setData] = useState(initialData);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  
  
  const [form, setForm] = useState({
    id: "",
    personaje: "",
    anime: "",
  });

  const mostrarModalActualizar = (dato) => {
    //setForm(dato);
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
        id_usuario: sessionStorage.getItem('id'),
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

          if (response.data.status_code == 200) {
            window.confirm("Ticket eliminado");
          }
          }).catch(error => console.error('Error al eliminar usuario:', error));
      }
  };

    useEffect(() => {
      fetch('http://localhost:5000/get_tickets')  
          .then(response => response.json())
          .then(data => setTickets(data))
          .catch(error => console.error('Error fetching users:', error));
    }, []);

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
    {/*<br />
        <Button color="success" onClick={mostrarModalInsertar}>Crear Ticket</Button>
        <br />
        <br />*/}
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
              <th>Categoria</th>
              <th>Usuario</th>
              <th>Area</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id_ticket}</td>
                <td>{ticket.asunto_ticket}</td>
                <td>{ticket.descripcion_ticket}</td>
                <td>{ticket.fecha_creacion_ticket}</td>
                <td>{ticket.categoria_ticket}</td>
                <td>{ticket.nombre_usuario}</td>
                <td>{ticket.nombre_area}</td>
                {/*<td>{ticket.nombre_usuario}</td>
                <td>{ticket.estado_actual}</td>*/}
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
          <Button color="primary" >Editar</Button>
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
            <label>Descripcion:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              value={descrTicket}
              onChange={(e) => setDescrTicket(e.target.value)}
            />
          </FormGroup>

          {/*<FormGroup>
            <label>Fecha:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              value={fechaCreacion}
              onChange={(e) => setFechaCreacion(e.target.value)}
            />
          </FormGroup>*/}

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
          <Button className="btn btn-danger" onClick={cerrarModalInsertar}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </motion.div>
  );
};

export default Tickets;
