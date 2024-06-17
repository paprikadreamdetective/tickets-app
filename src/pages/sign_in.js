import logo from '../pics/1.png'
import AuthUserForm from '../components/AuthUserForm';
import './sign_in.css'

function SignIn() {
    return (
        <div className='sign-in-body'>
            <div class="container">
                {/*<div class="box" id="left-box">
                    <h2>[Logo]</h2>
                    <p>Contenido del contenedor izquierdo.</p>
                </div>*/}
                <div class="contenido">
                    <div class="box" >
                        <AuthUserForm></AuthUserForm>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;