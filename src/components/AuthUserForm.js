import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import './AuthUserForm.css'

function AuthUserForm() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate();

    const handleLogin = () => {
    // Realizar lógica de autenticación aquí

    // Redirigir al componente Home después de iniciar sesión
    navigate("/home");
    };

    return (
        <>
            <h2 className="sign-in-title">Iniciar Sesión</h2>
            <form>
                <label class="sign-in-label" for="username">Usuario</label>
                <input class="sign-in-username-field" type="text" id="username" name="username" required />
                
                <label className="sign-in-label" for="password">Contraseña</label>
                <input className="sign-in-password-field" type="password" id="password" name="password" required />
                
                <button className="sign-in-button" type="submit" onClick={handleLogin}>Entrar</button>
                <a href="#" class="sign-in-button-register-now">¿No tienes cuenta? Regístrate</a>
            </form>
        </>
    );
}

export default AuthUserForm;