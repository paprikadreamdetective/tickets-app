import { useState } from "react";
import './AuthUserForm.css'
const AuthUserForm = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <>
        <h2 className="sign-in-title">Iniciar Sesión</h2>
        <form>
            <label class="sign-in-label" for="username">Usuario</label>
            <input class="sign-in-username-field" type="text" id="username" name="username" required />
            
            <label className="sign-in-label" for="password">Contraseña</label>
            <input className="sign-in-password-field" type="password" id="password" name="password" required />
            
            <button className="sign-in-button" type="submit">Entrar</button>
            <a href="#" class="sign-in-button-register-now">¿No tienes cuenta? Regístrate</a>
        </form>
        </>
    );
}

export default AuthUserForm;