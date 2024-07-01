import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import axios from "axios";
import React from 'react';

import './AuthUserForm.css'

const AuthUserForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://127.0.0.1:5000/login_user', {
            email: username,
            password: password,
          });
          const data = response.data;
          if (data.success) {
            sessionStorage.setItem('id', data.user.id)
            sessionStorage.setItem('name', data.user.name);
            sessionStorage.setItem('email', data.user.email);
            sessionStorage.setItem('role', data.user.role);
            sessionStorage.setItem('profile_pic', data.user.profile_pic)
            
            console.log('Sesion de: ', username);
            console.log('Rol: ', data.user.role);
            //setUsername('')
            setPassword('')
            setMessage(data.message);
            window.alert("(" + sessionStorage.getItem('role') + ")" + " Usuario: " + sessionStorage.getItem('name') + " Autenticado con exito")
            if ("Admin" == sessionStorage.getItem('role')) {
              navigate("/home");
            } else if ("Usuario" == sessionStorage.getItem('role')) {
              navigate("/home_users");
            }
          } else {
            setMessage(data.message);
          }
        } catch (error) {
          setMessage('Error al procesar la solicitud');
          window.alert('Error al procesar la solicitud');
        }
    // Redirigir al componente Home después de iniciar sesión
    };

    return (
        <>
            <h2 className="sign-in-title">Iniciar Sesión</h2>
            <form>
                <label className="sign-in-label" >Usuario</label>
                <input className="sign-in-username-field" type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                
                <label className="sign-in-label" >Contraseña</label>
                <input className="sign-in-password-field" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                
                <button className="sign-in-button" type="submit" onClick={handleLogin}>Entrar</button>
                <a href="#" className="sign-in-button-register-now">¿No tienes cuenta? Regístrate</a>
            </form>
        </>
    );
}

export default AuthUserForm;