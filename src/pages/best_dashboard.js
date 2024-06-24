import TopbarDashboard from '../components/TopbarDashboard';


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './dashboard.css';
//import './Dashboard.css'; // Asumiendo que tienes los estilos en un archivo separado

const Dashboard = () => {
    const [ticketCount, setTicketCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [profilePic, setProfilePic] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ticketResponse = await axios.get('/api/ticket?status_id=1');
                const projectResponse = await axios.get('/api/project');
                const categoryResponse = await axios.get('/api/category');
                const userResponse = await axios.get('/api/user?order=created_at_desc');
                
                setTicketCount(ticketResponse.data.length);
                setProjectCount(projectResponse.data.length);
                setCategoryCount(categoryResponse.data.length);
                setUserCount(userResponse.data.length);
                
                // Assuming profile data is available in user response
                if (userResponse.data.length > 0) {
                    const userProfile = userResponse.data[0];
                    setProfilePic(userProfile.profile_pic);
                    setName(userProfile.name);
                    setEmail(userProfile.email);
                }
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    const handleProfilePicChange = async (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);

        try {
            const response = await axios.post('/action/upload-profile.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            document.getElementById('respuesta').innerHTML = response.data;
        } catch (error) {
            console.error('Error uploading profile picture', error);
        }
    };

    return (
        <>
        {/*<div className="container" >*/}
            {/*<div className="page-title">*/}
                <TopbarDashboard/>
                
                <br/><br/>
                <div className="container">
                    <div className="card left">
                        <div className="profile-picture-container">
                            <img className="img-fluid" style={{ width: '100%', display: 'block' }} src={`images/profiles/${profilePic}`} alt="profile" />
                        </div>
                        <span className="">
                            <form id="formulario" encType="multipart/form-data">
                                Cambiar Imagen de perfil: <input type="file" name="file" onChange={handleProfilePicChange} />
                            </form>
                        </span>
                        <div id="respuesta"></div>
                    </div>

                    <div className="card right">
                        {/* Aquí irían los alertas y la función profile() */}
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Informacion personal</h2>
                                <ul className="nav navbar-right panel_toolbox">
                                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a></li>
                                    <li><a className="close-link"><i className="fa fa-close"></i></a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            <div className="x_content">
                                <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left" action="action/upd_profile.php" method="post">
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">Nombre</label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="name" id="first-name" className="form-control col-md-7 col-xs-12" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="last-name">Correo electronico</label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="email" id="last-name" name="email" className="form-control col-md-7 col-xs-12" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <br /><br /><br />
                                    <h2 style={{ paddingLeft: '50px' }}>Cambiar Contraseña</h2>
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Contraseña antigua</label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input name="password" className="date-picker form-control col-md-7 col-xs-12" type="password" placeholder="**********" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Nueva contraseña</label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input name="new_password" className="date-picker form-control col-md-7 col-xs-12" type="password" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Confirmar contraseña nueva</label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input name="confirm_new_password" className="date-picker form-control col-md-7 col-xs-12" type="password" />
                                        </div>
                                    </div>
                                    <div className="ln_solid"></div>
                                    <div className="form-group">
                                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                            <button type="submit" name="token" className="btn btn-success">Actualizar Datos</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            {/*</div>
        </div>*/}
        </>
    );
};

export default Dashboard;
