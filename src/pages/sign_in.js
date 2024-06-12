import logo from '../pics/1.png'
import AuthUserForm from '../components/AuthUserForm';
import './sign_in.css'

const SignIn = () => {
    return (
        <div class="container">
            <div class="box" id="left-box">
                <h2>Contenedor Izquierdo</h2>
                <p>Contenido del contenedor izquierdo.</p>
            </div>
            <div class="box" id="right-box">
                <h2>Contenedor Derecho</h2>
                <p>Contenido del contenedor derecho.</p>
                <AuthUserForm></AuthUserForm>
            </div>
        </div>
    );
}

export default SignIn;