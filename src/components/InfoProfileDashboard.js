
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBFile
} from 'mdb-react-ui-kit';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserPicDefault from '../pics/user_default.jpg';
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
function InfoProfileDashboard() {
    
const [userId, setUserId] = useState('');
const [selectedFile, setSelectedFile] = useState(null);
const [profilePic, setProfilePic] = useState(null);
//const profilePic = sessionStorage.getItem('profile_pic')
    
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setUserId(sessionStorage.getItem('id'))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!userId || !selectedFile) {
            alert('Por favor selecciona un archivo');
            return;
        }
        console.log(userId)
        console.log(selectedFile)
        const formData = new FormData();
        formData.append('id', userId);
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://localhost:5000/change_profile_pic', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            const result = await response.json();
            console.log(result);
            alert('Imagen subida correctamente.');
        } catch (error) {
            console.error('Error al subir la imagen:', error);
            // Aquí podrías manejar el error mostrando un mensaje al usuario, por ejemplo
        }
    };

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
            <section style={{ backgroundColor: '#eee' }}>
                <MDBContainer style={{ maxWidth: '1000px', padding: '50px', marginTop: '10px' }}>
                
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                src={profilePic !== null ? `data:image/jpeg;base64,${profilePic}` : UserPicDefault}
                                alt="avatar"
                                className="rounded-circle"
                                style={{ width: '200px' }}
                                fluid />
                                
                                <div className="d-flex justify-content-center mb-2">
                                    <form onSubmit={handleSubmit}>
                                        
                                        <div>
                                            <label class="form-label" htmlFor="file">Foto de Perfil</label>
                                            <input
                                                class="form-control"
                                                type="file"
                                                id="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                            <br></br>
                                        </div>
                                        <MDBBtn outline className="ms-1" color='primary' type="submit">Cambiar foto de perfil</MDBBtn>
                                    </form>
                                </div>
                            </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <MDBListGroup flush className="rounded-3">
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                    <MDBIcon fas icon="globe fa-lg text-warning" />
                                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                    <MDBCardText>mdbootstrap</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                    <MDBCardText>@mdbootstrap</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                    <MDBCardText>mdbootstrap</MDBCardText>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                    <MDBCardText>mdbootstrap</MDBCardText>
                                </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="8">
                            <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>ID Usuario</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">

                                    <MDBCardText className="text-muted">{sessionStorage.getItem('username')}</MDBCardText>

                                    <MDBCardText className="text-muted">{sessionStorage.getItem('id')}</MDBCardText>
                                </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Nombre completo</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{sessionStorage.getItem('name')}</MDBCardText>

                                </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Email</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{sessionStorage.getItem('email')}</MDBCardText>
                                </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Rol</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{sessionStorage.getItem('role')}</MDBCardText>
                                </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Address</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                                </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                            </MDBCard>

                            <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                <MDBCardBody>
                                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                    <MDBProgress className="rounded">
                                    <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                    </MDBProgress>

                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                    <MDBProgress className="rounded">
                                    <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                    </MDBProgress>

                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                    <MDBProgress className="rounded">
                                    <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                    </MDBProgress>

                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                    <MDBProgress className="rounded">
                                    <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                    </MDBProgress>

                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                    <MDBProgress className="rounded">
                                    <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                    </MDBProgress>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                <MDBCardBody>
                                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                    <MDBProgress className="rounded">
                                    <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                    </MDBProgress>

                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                    <MDBProgress className="rounded">
                                    <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                    </MDBProgress>

                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                    <MDBProgress className="rounded">
                                    <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                    </MDBProgress>

                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                    <MDBProgress className="rounded">
                                    <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                    </MDBProgress>

                                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                    <MDBProgress className="rounded">
                                    <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                    </MDBProgress>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                
                </MDBContainer>
            </section>
        </>
    );
}

export default InfoProfileDashboard;