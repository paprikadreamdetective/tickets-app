import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserEdit,  faTimes, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBFile
  } from 'mdb-react-ui-kit';
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
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import UserPicDefault from '../pics/user_default.jpg'
import './users.css';

function UsersPage() {
    const roles = {
        admin: 'Admin',
        usuario: 'Usuario'
    };

    const areas = {
        1: 'Administracion',
        2: 'Comercio',
        3: 'Finanzas',
        4: 'Ejecutiva',
        5: 'Construccion',
        6: 'Ingenieria y Diseño',
        7: 'Direccion General'
    };

    const [users, setUsers] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalActualizar, setModalActualizar] = useState(false);

    const [idUsuario, setIdUsuario] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [correoUsuario, setCorreoUsuario] = useState('');
    const [passwordUsuario, setPasswordUsuario] = useState('');
    const [confirmPasswordUsuario, setConfirmPasswordUsuario] = useState('');
    const [rolUsuario, setRolUsuario] = useState('');
    const [area, setArea] = useState();
    
    const mostrarModalInsertar = () => {
        setModalInsertar(true);
    };
    
    const cerrarModalInsertar = () => {
        setModalInsertar(false);
    };

    const mostrarModalActualizar = () => {
        setModalActualizar(true);
    };

    const cerrarModalActualizar = () => {
        setModalActualizar(false);
    };

    const handleInsertUser = async (e) => {
        e.preventDefault();
        if (passwordUsuario !== confirmPasswordUsuario) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        try {
            const data = {
                id_usuario: idUsuario,
                nombre_usuario: nombreUsuario,
                apellido_paterno: apellidoP,
                apellido_materno: apellidoM,
                correo_usuario: correoUsuario,
                password_usuario: passwordUsuario,
                rol_usuario: rolUsuario,
                id_area: area
              };
            const response = await fetch('http://localhost:5000/add_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            });
            const responseData = await response.json();
            if (responseData.result) {
                window.confirm(responseData.message);
                cerrarModalInsertar();
            } else {
                window.confirm(responseData.message);
                cerrarModalInsertar();
            }
        } catch (error) {
            window.confirm(error);
            cerrarModalInsertar();
        }
    };
    
    const handelActualizarUser = async (e) => {

    };


    const handleDeleteUser = (id) => {
        const option = window.confirm("¿Estás seguro de eliminar este usuario?");
        if (option) {
            axios.post(`http://localhost:5000/remove_user/${id}`)
            .then(response => {
                if (response.data.success) {
                    window.confirm(response.data.message);
                } else {
                    window.confirm(response.data.message);
                }
                setUsers(users.filter(user => user.id !== id));
            }).catch(error => console.error('Error al eliminar usuario:', error));
        }
    };

    useEffect(() => {
        fetch('http://localhost:5000/get_users')  
            .then(response => response.json())
            .then(data => setUsers(data))
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
            <Container>
                <h3>Usuarios</h3>
            </Container>
            <Container>
                <Button color="success"  onClick={mostrarModalInsertar}>
                    <FontAwesomeIcon icon={faUserPlus} /> {" "} Añadir Usuario
                </Button>
            </Container>
            <Container className="d-flex justify-content-center align-items-center min-vh-10">
                <div className='users-table-container'>
                    <Table striped responsive hover className="users-table-responsive">
                        <thead className='users-table-thead'>
                            <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Email</th>
                            <th>Area</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user) => (
                            <tr key={user.id}>
                                
                                <td>{user.id_usuario}</td>
                                <td>{user.nombre_usuario}</td>
                                <td>{user.apellido_paterno}</td>
                                <td>{user.apellido_materno}</td>
                                <td>{user.correo_usuario}</td>
                                <td>{user.nombre_area}</td>

                                <td>
                                <Button color="primary" >
                                    <FontAwesomeIcon icon={faUserEdit} /> {" "}Editar
                                </Button>{" "}
                                <Button color="danger" onClick={() => handleDeleteUser(user.id_usuario)} >
                                    <FontAwesomeIcon icon={faTrash} /> {" "} Eliminar
                                </Button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>

            <Modal isOpen={modalInsertar} className="modal-lg">
            <ModalHeader>
                <div>
                    <h3>Nuevo Usuario</h3>
                    
                </div>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" 
                                type="text" 
                                value={idUsuario} 
                                onChange={(e) => setIdUsuario(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <label>Nombre:</label>
                            <input
                                className="form-control"
                                type="text"
                                value={nombreUsuario}
                                onChange={(e) => setNombreUsuario(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <label>Apellido Paterno:</label>
                            <input
                                className="form-control"
                                type="text"
                                value={apellidoP}
                                onChange={(e) => setApellidoP(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <label>Apellido Materno:</label>
                            <input
                                className="form-control"
                                type="text"
                                value={apellidoM}
                                onChange={(e) => setApellidoM(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <label>Email:</label>
                            <input
                                className="form-control"
                                type="text"
                                value={correoUsuario}
                                onChange={(e) => setCorreoUsuario(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <label>Contraseña:</label>
                            <input
                                className="form-control"
                                type="password"
                                value={passwordUsuario}
                                onChange={(e) => setPasswordUsuario(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <label>Confirmar Contraseña:</label>
                            <input
                                className="form-control"
                                type="password"
                                value={confirmPasswordUsuario}
                                onChange={(e) => setConfirmPasswordUsuario(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <label>Rol:</label>
                            {/*<input
                                className="form-control"
                                type="text"
                                value={rolUsuario}
                                onChange={(e) => setRolUsuario(e.target.value)}
                            />*/}
                            <select
                                className="form-control"
                                value={rolUsuario}
                                onChange={(e) => setRolUsuario(e.target.value)}
                            >
                                <option value="">--Seleccione un rol--</option>
                                {Object.entries(roles).map(([value, label]) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </select>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <label>Área:</label>
                            <select
                                className="form-control"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                            >
                                <option value="">--Seleccione un área--</option>
                                {Object.entries(areas).map(([num, name]) => (
                                    <option key={num} value={num}>{name}</option>
                                ))}
                            </select>
                        </FormGroup>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={handleInsertUser}>
                    <FontAwesomeIcon icon={faUserPlus} /> {" "} Añadir
                </Button>
                <Button className="btn btn-danger" onClick={cerrarModalInsertar}>
                    <FontAwesomeIcon icon={faTimes} /> {" "} Cancelar
                </Button>
            </ModalFooter>
        </Modal>
        </motion.div>
        </>
    );
}
export default UsersPage;