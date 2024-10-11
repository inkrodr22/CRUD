import './Startup.scss';
import { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import {Card} from 'primereact/card'
import StartupForm from './startupCreate';
import StartupTable from './startupTable';
import logo from '../../img/5400_6_07.jpg'
import { getStartups, deleteStartup } from '../../api/startups'; // Asegúrate de importar los datos correctamente

const Startup = () => {
    const [visible, setVisible] = useState(false);
    const [startups, setStartups] = useState([]);
    const [selectedStartups, setSelectedStartups] = useState([]);

    // Obtener la lista de startups al cargar el componente
    useEffect(() => {
        const fetchStartups = async () => {
            try {
                const data = await getStartups();
                setStartups(data);
            } catch (error) {
                console.error('Error fetching startups:', error);
            }
        };

        fetchStartups();
    }, []);

    const onDelete = async (id) => {
            try {
                await deleteStartup(id); // Llama a la API para eliminar la startup
                setStartups((prevStartups) => prevStartups.filter(startup => startup._id !== id)); // Actualiza la lista de startups
            } catch (error) {
                console.error('Error al eliminar la startup:', error); // Manejo de errores
            }
    };

    const handleEdit = (startup) => {
        console.log('Editing startup:', startup);
    };

    return (
        
        <div className="startup-container">
        
            <Card
            style={{ width: '100%', backgroundColor: 'white', minHeight: '90vh'}}
            className="shadow-2"
        >
            <div className="p-4 md:p-6">

            <header className="startup-header">
                <div className="startup-info">
                    <img src={logo} alt="Startup Logo" className="startup-logo" />
                    <div>
                        <h1>Startup</h1>
                        <p className="startup-description">Una startup es una empresa emergente que busca desarrollar un producto o servicio innovador y escalable, generalmente en el ámbito tecnológico. Estas empresas suelen estar en sus primeras etapas de desarrollo y buscan financiamiento para crecer rápidamente en un mercado competitivo.</p>
                    </div>
                </div>
                
                {/* Botón Crear Startup */}
                <Button 
                    label="Crear Startup" 
                    icon="pi pi-plus" 
                    className="button p-button-primary create-startup-button" 
                    onClick={() => setVisible(true)} 
                />
            </header>

            {/* Modal para crear una nueva startup */}
            <Dialog 
                visible={visible} 
                header="Crear Startup" 
                style={{ width: '500px'}} 
                onHide={() => setVisible(false)}
            >
                <StartupForm onClose={() => setVisible(false)} />
            </Dialog>

            {/* Tabla de Startups */}
        <div className='tabla'>
            <section className="startup-table-section">
                <StartupTable 
                    startups={startups} 
                    selectedStartups={selectedStartups} 
                    setSelectedStartups={setSelectedStartups} 
                    onEdit={handleEdit} 
                    onDelete={onDelete} 
                />
            </section>
            </div>
            </div>
            </Card>
        </div>
    );
}

export default Startup;
