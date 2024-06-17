import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

  const insertar = () => {
    const valorNuevo = { ...form, id: data.length + 1 };
    setData([...data, valorNuevo]);
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

  return (
    <>
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
            {data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
                <td>{dato.email}</td>
                <td>{dato.noTicket}</td>
                <td>{dato.asunto}</td>
                <td>{dato.area}</td>
                <td>{dato.estado}</td>
                <td>
                  <Button color="primary" onClick={() => mostrarModalActualizar(dato)}>
                    Editar
                  </Button>{" "}
                  <Button color="danger" onClick={() => eliminar(dato)}>Eliminar</Button>
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
          <FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" value={data.length + 1} />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="personaje"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Email:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Asunto:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Descripcion:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Area:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={insertar}>Insertar</Button>
          <Button className="btn btn-danger" onClick={cerrarModalInsertar}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Tickets;
