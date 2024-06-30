import React, { useState, useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBCardImage
} from 'mdb-react-ui-kit';

import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faUser,
    faList,
    faCopy,
    faTicket,
    faGears,
    faDashboard,
    faNewspaper,
    faChartLine,
    faBars
  } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
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
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import UserPicDefault from '../pics/user_default.jpg'

import { useNavigate } from 'react-router-dom';

function TopbarDashboard() {

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
    };

    const [openNavExternal, setOpenNavExternal] = useState(false);
    const navigate = useNavigate()
    const [profilePic , setProfilePic] = useState(null);

    useEffect(() => {
        axios.post(`http://localhost:5000/get_profile_pic/${sessionStorage.getItem('id')}`)  
            .then(response => {
                
                setProfilePic(response.data.user.profile_pic);
                if (response.data.status_code == 200) {
                    console.log("Foto de perfil cargada");
                }
            })
            .catch(error => console.error('Error fetching users:', error));
      }, []);
    return (
        <>
        <MDBCollapse open={openNavExternal}>
            <div className='bg-dark p-4'>
            <h5 className='text-white h3'>Collapsed content</h5>
            <span className='text-muted'>Toggleable via the navbar brand.</span>
            </div>
        </MDBCollapse>
        <MDBNavbar dark bgColor='dark'>
            <Container >
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarToggleExternalContent'
                    aria-controls='navbarToggleExternalContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavExternal(!openNavExternal)}>
                    <MDBIcon icon="bars" fas>
                    </MDBIcon>
                </MDBNavbarToggler>
                <div>
                    <MDBCardImage
                            style={{ width: '50px' }}
                            className="rounded-circle"
                            src={profilePic !== null ? `data:image/jpeg;base64,${profilePic}` : UserPicDefault}
                            alt='Generic placeholder image'
                            fluid >
                    </MDBCardImage>
                    {' '}
                    <MDBBtn color="primary" onClick={handleLogout}> 
                        Cerrar Sesión 
                    </MDBBtn>
                </div>
            </Container>
        </MDBNavbar>
        </>
    );
}
export default TopbarDashboard;
