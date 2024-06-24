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
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>Usuario:</strong> {user.nombre_usuario}, <strong>Email:</strong> {user.correo_usuario}
                    </li>
                ))}
            </ul>
        </div>
    );

}


export default UsersPage;