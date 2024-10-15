import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importar useNavigate
import axios from 'axios';
import './technologyDetail.scss'; // Asegúrate de importar tu archivo CSS
import logo from "../../../img/technologies.png";

const TechnologyDetail = () => {
    const { id } = useParams(); // Obtener el id de la URL
    const [technology, setTechnology] = useState(null);
    const navigate = useNavigate(); // Hook para navegar

    useEffect(() => {
        const fetchTechnologyDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/technologies/read/${id}`);
                setTechnology(response.data);
            } catch (error) {
                console.error('Error fetching technology details:', error);
            }
        };

        fetchTechnologyDetail();
    }, [id]);

    if (!technology) return <div>Cargando...</div>;

    return (
        <div className="technology-detail-container">
            {/* Tarjeta para el logo y el nombre de la tecnología */}
            <div className="technology-header-card technology-card">
                <div className="technology-logo">
                    <img src={logo} alt="Technology Logo" className="logo-img" />
                </div>
                <div className="technology-name-container">
                    <h1 className="technology-name-label">Nombre:</h1>
                    <h2 className="technology-name">{technology.name}</h2>
                </div>
                <button 
                    className="back-button" 
                    onClick={() => navigate('/technology')} // Navegar a la ruta /technologies
                >
                    Regresar
                </button>
            </div>
            <hr className="separator" />

            {/* Tarjeta para la información detallada de la tecnología */}
            <div className="technology-info-card technology-card">
                <h2>Información de la Tecnología</h2>
                <div className="technology-description">
                    <p><strong style={{ color: '#3F51B5' }}>Fecha de Creación:</strong> {new Date(technology.createdDate).toLocaleDateString()}</p>
                    <p><strong style={{ color: '#3F51B5' }}>Descripción:</strong> {technology.description}</p>
                    <p><strong style={{ color: '#3F51B5' }}>Sector:</strong> {technology.sector}</p>
                    <p><strong style={{ color: '#3F51B5' }}>Estado de Adopción:</strong> {technology.adoptionStatus}</p>
                    <p><strong style={{ color: '#3F51B5' }}>Uso Actual:</strong> {technology.currentUsage}</p>
                    <p><strong style={{ color: '#3F51B5' }}>Costo de Implementación:</strong> ${technology.implementationCost.toLocaleString()}</p>
                    <p><strong style={{ color: '#3F51B5' }}>Nivel de Madurez:</strong> {technology.maturityLevel}</p>
                </div>
            </div>
        </div>
    );
};

export default TechnologyDetail;
