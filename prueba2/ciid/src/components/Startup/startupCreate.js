import { useEffect, useState, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { createStartup } from '../../api/startups'; // Asegúrate de tener una función para crear la startup
import { updateStartup } from '../../api/startups';

const StartupForm = ({ onClose, initialData, onHide }) => {
    const [name, setName] = useState('');
    const [foundedDate, setFoundedDate] = useState(null);
    const [location, setLocation] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [investmentReceived, setInvestmentReceived] = useState(null);
    const [description, setDescription] = useState('');
    const [employees, setEmployees] = useState(0);

    const categories = useMemo(() => [
        { name: 'Software as a Service', code: 'saas' },
        { name: 'Tecnología Financiera', code: 'fintech' },
        { name: 'Inteligencia Artificial', code: 'IA' },
        { name: 'Ciberseguridad', code: 'Ciberseguridad' },
        { name: 'Realidad Virtual', code: 'VR' }
    ], []);

    useEffect(() => {
        // Si hay datos iniciales, establece los valores en el formulario
        console.log('Startup a editar en startupcreate:', initialData); // Esto debería imprimir cuando el startup cambia
        if (initialData) {
            setName(initialData.name);
            setFoundedDate(new Date(initialData.foundedDate));
            setLocation(initialData.location);
            setSelectedCategory(categories.find(cat => cat.code === initialData.category)); // Encuentra la categoría correspondiente
            setInvestmentReceived(initialData.investmentReceived);
            setDescription(initialData.description);
            setEmployees(initialData.employees);
        }
    }, [initialData, categories]); // Dependencia de categories para evitar problemas de referencia

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            foundedDate,
            location,
            category: selectedCategory ? selectedCategory.code : '',
            investmentReceived,
            description,
            employees
        };
        console.log(formData);  // Aquí puedes ver el objeto JSON en la consola
        
        try {
            // Si hay datos iniciales, puedes decidir si actualizas o creas
            if (initialData) {
                const id = initialData._id;
                // Llama a la función para actualizar la startup aquí
                await updateStartup(id, formData);
                console.log('Actualizar la startup:', formData); // Aquí deberías tener la función de actualización
            } else {
                // Llama a la función para crear la startup
                await createStartup(formData);
                console.log('Startup created successfully'); // Mensaje de éxito
            }
            onHide();
        } catch (error) {
            console.error('Error creating or updating startup:', error); // Manejo de errores
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Nombre</label>
                    <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingresa el nombre" required />
                </div>
                <div className="field">
                    <label htmlFor="foundedDate">Fecha de Fundación</label>
                    <Calendar id="foundedDate" value={foundedDate} onChange={(e) => setFoundedDate(e.value)} dateFormat="dd/mm/yy" placeholder="Selecciona la fecha" showIcon required />
                </div>
                <div className="field">
                    <label htmlFor="location">Ubicación</label>
                    <InputText id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Ingresa la ubicación" required />
                </div>
                <div className="field">
                    <label htmlFor="category">Categoría</label>
                    <Dropdown id="category" value={selectedCategory} options={categories} onChange={(e) => setSelectedCategory(e.value)} optionLabel="name" placeholder="Selecciona una categoría" required />
                </div>
                <div className="field">
                    <label htmlFor="investmentReceived">Inversión Recibida</label>
                    <InputNumber inputId="investmentReceived" value={investmentReceived} onValueChange={(e) => setInvestmentReceived(e.value)} mode="currency" currency="USD" locale="en-US" required />
                </div>
                <div className="field">
                    <label htmlFor="employees">Número de Empleados</label>
                    <InputNumber inputId="employees" value={employees} onValueChange={(e) => setEmployees(e.value)} min={0} required />
                </div>
                <div className="field">
                    <label htmlFor="description">Descripción</label>
                    <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} cols={30} required />
                </div>
                <div className="footer">
                    <Button label="Cancelar" icon="pi pi-times" onClick={onClose} className="cancel-button" />
                    <Button label="Enviar" icon="pi pi-check" onClick={onClose} type="submit" />
                </div>
            </form>
        </div>
    );
};

export default StartupForm;
