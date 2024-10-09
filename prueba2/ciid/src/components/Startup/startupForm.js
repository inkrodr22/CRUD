import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const StartupForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [investment, setInvestment] = useState('');
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');
    const [selectedStatus, setSelectedStatus] = useState(null);

    const categories = [
        { name: 'Software as a Service', code: 'saas' },
        { name: 'Tecnología Financiera', code: 'fintech' },
        { name: 'Inteligencia Artificial', code: 'IA' },
        { name: 'Ciberseguridad', code: 'Ciberseguridad' },
        { name: 'Realidad Virtual', code: 'VR' }
    ];

    const status = [
        { name: 'Ideacion', code: 'ideacion' },
        { name: 'Desarrolo', code: 'desarrollo' },
        { name: 'Operación', code: 'operacion' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            category: selectedCategory,
            date,
            investment,
            description,
            contact,
            status: selectedStatus
        };
        console.log(formData);  // Simular el envío de datos
        onClose();  // Cerrar el formulario después de enviar
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Nombre</label>
                    <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingresa el nombre" required />
                </div>
                <div className="field">
                    <label htmlFor="date">Fecha de Fundación</label>
                    <Calendar id="date" value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" placeholder="Selecciona la fecha" showIcon />
                </div>
                <div className="field">
                    <label htmlFor="category">Categoria</label>
                    <Dropdown id="category" value={selectedCategory} options={categories} onChange={(e) => setSelectedCategory(e.value)} optionLabel="name" placeholder="Selecciona una categoria" required />
                </div>
                <div className="field">
                    <label htmlFor="investment">Inversión Recibida</label>
                    <InputNumber inputId="currency-us" value={investment} onValueChange={(e) => setInvestment(e.target.value)} mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="field">
                    <label htmlFor="contact">Nombre del Contacto</label>
                    <InputText id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Ingresa el Nombre del Contacto" required />
                </div>
                <div className="field">
                    <label htmlFor="status">Estado</label>
                    <Dropdown id="status" value={selectedStatus} options={status} onChange={(e) => setSelectedStatus(e.value)} optionLabel="name" placeholder="Selecciona un estado" required />
                </div>
                <div className="field">
                    <label htmlFor="description">Descripción</label>
                    <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} cols={30} />
                </div>
                {/* Footer for the button */}
                <div className="footer">
                    <Button label="Cancelar" icon="pi pi-times" onClick={onClose} className="cancel-button" />
                    <Button label="Enviar" icon="pi pi-check" type="submit" />
                </div>
            </form>
        </div>
    );
}

export default StartupForm;
