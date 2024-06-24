import React, { useState, useEffect } from 'react';
function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/get_users')  // Reemplaza con la URL de tu API Flask
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="App">
            <h1 style = {{ 'text-align': 'center'}}>Lista de Usuarios</h1>
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
        </div>
    );

}


export default UsersPage;