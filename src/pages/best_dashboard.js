import TopbarDashboard from '../components/TopbarDashboard';
import InfoProfileDashboard from '../components/InfoProfileDashboard';

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
            
            <InfoProfileDashboard/>
        </>
    );
};

export default Dashboard;
