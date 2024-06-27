import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBBtn
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
  
function TopbarDashboard() {
  const [openNavExternal, setOpenNavExternal] = useState(false);

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
            <MDBBtn color="primary"> Logout </MDBBtn>
        </Container>
      </MDBNavbar>
    </>
  );
}
export default TopbarDashboard;
