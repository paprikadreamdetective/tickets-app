import React, { useState, useEffect } from 'react';
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
import './users.css';

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    
    const [idUsuario, setIdUsuario] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [correoUsuario, setCorreoUsuario] = useState('');
    const [passwordUsuario, setPasswordUsuario] = useState('');
    const [rolUsuario, setRolUsuario] = useState('');
    const [area, setArea] = useState();
    
    /*const [form, setForm] = useState({
        id_usuario: "",
        nombre_usuario: "",
        apellido_paterno: "",
        apellido_materno: "",
        correo_usuario: "",
        password_usuario: "",
        rol_usuario: "",
        id_area: 0,
        id_equipo: 0,
    });*/

    const mostrarModalInsertar = () => {
        setModalInsertar(true);
    };
    
    const cerrarModalInsertar = () => {
        setModalInsertar(false);
    };

   
    const handleInsertUser = async (e) => {
        e.preventDefault();
    
        const data = {
          id_usuario: idUsuario,
          nombre_usuario: nombreUsuario,
          apellido_paterno: apellidoP,
          apellido_materno: apellidoM,
          correo_usuario: correoUsuario,
          password_usuario: correoUsuario,
          rol_usuario: rolUsuario,
          id_area: area
        };
    
        // Enviar los datos al servidor Flask
        try {
          const response = await fetch('http://localhost:5000/add_user', {
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

    useEffect(() => {
        fetch('http://localhost:5000/get_users')  
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
    <>
        <Container>
            <h3>Usuarios</h3>
        </Container>
        <Container>
            <Button color="warning"  onClick={mostrarModalInsertar}>
                Añadir Usuario
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
                        <Button color="primary" value={user.id}>
                            Editar
                        </Button>{" "}
                        <Button color="danger" >Eliminar</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </div>
        </Container>

        <Modal isOpen={modalInsertar}>
            <ModalHeader>
            <div><h3>Nuevo Usuario</h3></div>
            </ModalHeader>

            <ModalBody>
            <FormGroup>
                <label>Id:</label>
                <input className="form-control" 
                type="text" 
                value={idUsuario} 
                onChange={(e) => setIdUsuario(e.target.value)} />
            </FormGroup>

            <FormGroup>
                <label>Nombre:</label>
                <input
                className="form-control"
                name="personaje"
                type="text"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <label>Apellido Paterno:</label>
                <input
                className="form-control"
                type="text"
                value={apellidoP}
                onChange={(e) => setApellidoP(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <label>Apellido Materno:</label>
                <input
                className="form-control"
                type="text"
                value={apellidoM}
                onChange={(e) => setApellidoM(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <label>Email:</label>
                <input
                className="form-control"
                type="text"
                value={correoUsuario}
                onChange={(e) => setCorreoUsuario(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <label>Contraseña:</label>
                <input
                className="form-control"
                type="text"
                value={passwordUsuario}
                onChange={(e) => setPasswordUsuario(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <label>Rol usuario:</label>
                <input
                className="form-control"
                type="text"
                value={rolUsuario}
                onChange={(e) => setRolUsuario(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <label>Area:</label>
                <input
                className="form-control"
                type='numeric'
                value={area}
                onChange={(e) => setArea(e.target.value)}
                />
            </FormGroup>

            </ModalBody>

            <ModalFooter>
            <Button color="primary" onClick={handleInsertUser} >Insertar</Button>
            <Button className="btn btn-danger" onClick={cerrarModalInsertar}>Cancelar</Button>
            </ModalFooter>
      </Modal>
    </>
    );
    
}
/*<div className="App">
            <h1 >Lista de Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <br></br>
                        <strong>ID:</strong> {user.id_usuario},
                        <strong>Nombre:</strong> {user.nombre_usuario}, 
                        <strong>Apellido Paterno:</strong> {user.apellido_paterno}, 
                        <strong>Apellido Materno:</strong> {user.apellido_materno},
                        <strong>Email:</strong> {user.correo_usuario},
                        <strong>Area:</strong> {user.nombre_area}
                    </li>
                ))}
            </ul>
        </div>*/

export default UsersPage;