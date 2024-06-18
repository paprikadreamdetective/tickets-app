import logo from '../pics/sima-logo-letters.png'
import AuthUserForm from '../components/AuthUserForm';
import './sign_in.css'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function SignIn() {
    return (
        <div className='sign-in-body'>
            <MDBRow>
                <MDBCol col='6' className="mb-5">
                    <div class="sign-in-form-container">
                        <div className="text-center">
                            <img src={logo} style={{width: '185px'}} alt="logo" />
                        </div>
                        <AuthUserForm></AuthUserForm>
                    </div>
                </MDBCol>
                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 class="mb-4">We are more than just a company</h4>
                        <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </div>
    );
}

export default SignIn;