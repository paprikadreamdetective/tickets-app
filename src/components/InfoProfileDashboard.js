
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

import React, { useState } from 'react';
import UserPicDefault from '../pics/user_default.jpg';

function InfoProfileDashboard() {
    
const [userId, setUserId] = useState('');
const [selectedFile, setSelectedFile] = useState(null);
const profilePic = sessionStorage.getItem('profile_pic')
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

  
    return (
        <>
            <section style={{ backgroundColor: '#eee' }}>
                <MDBContainer className="py-9">
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                src={profilePic !== 'null' ? `data:image/jpeg;base64,${profilePic}` : UserPicDefault}
                                alt="avatar"
                                className="rounded-circle"
                                style={{ width: '200px' }}
                                fluid />
                                {/*<p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>*/}
                                <div className="d-flex justify-content-center mb-2">
                                {/*<MDBBtn>
                                    Cambiar foto de perfil
                                </MDBBtn>*/}
                                {/*<div>
                                    <label class="form-label">Cambiar foto de perfil</label>
                                    <input type="file" class="form-control" onChange={uploadProfilePic}/> 
                                </div>*/ }

            <form onSubmit={handleSubmit}>
                
                <div>
                    <label class="form-label" htmlFor="file">Seleccionar Imagen:</label>
                    <input
                        class="form-control"
                        type="file"
                        id="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Subir Imagen</button>
            </form>
        
                                
                                {/*<MDBBtn outline className="ms-1">Message</MDBBtn>*/}
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