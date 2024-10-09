import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./Startup.scss"
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";



// Dummy placeholder data and templates (replace with real data/templates)
const customers = [];  // Fetch or import your customer data here
const filters = {};  // Set default filter state
const header = "Customer Table";  // Replace with your table header

// Templates for table body and filters (replace with real templates)
const countryBodyTemplate = (rowData) => rowData.country.name;
const representativeBodyTemplate = (rowData) => rowData.representative.name;
const representativeFilterTemplate = () => <input placeholder="Filter by representative" />;
const dateBodyTemplate = (rowData) => rowData.date;
const dateFilterTemplate = () => <input type="date" />;
const balanceBodyTemplate = (rowData) => rowData.balance;
const balanceFilterTemplate = () => <input type="number" />;
const statusBodyTemplate = (rowData) => rowData.status;
const statusFilterTemplate = () => <input placeholder="Filter by status" />;
const activityBodyTemplate = (rowData) => rowData.activity;
const activityFilterTemplate = () => <input placeholder="Filter by activity" />;

const Startup = () => {
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
        { name: 'Realidad Virual', code: 'VR' }
    ];

    const status = [
        { name: 'Ideacion', code: 'ideacion' },
        { name: 'Desarrolo', code: 'desarrollo' },
        { name: 'Operación', code: 'operacion' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
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
    };
// Action body template for rendering action buttons (e.g., edit/delete)
    const actionBodyTemplate = (rowData) => {
        return (
            <div>
                <button>Edit</button>
                <button> Delete</button>
            </div>
        );
    };
    const [selectedCustomers, setSelectedCustomers] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Any necessary data fetching or effect handling
    }, []);

    return (
        <div className='Modal'>
            <p>Startup</p>
            <div >
                <Button label="Crear Startup" type="submit" className="p-button-primary" onClick={() => setVisible(true)}></Button> 
                <Dialog visible={visible} header="Crear Startup" style={{ width: '500px', height: '520px'}} onHide={() => {if (!visible) return; setVisible(false); }}>
                <form onSubmit={handleSubmit} className="form-container">

            {/* Campo de texto para nombre */}
            <div className="field">
                <label htmlFor="name">Nombre</label>
                <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingresa el nombre" required />
            </div>

            {/* Campo de fecha para fecha de Fundacion */}
            <div className="field">
                <label htmlFor="date">Fecha de Fundación</label>
                <Calendar id="date" value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" placeholder="Selecciona la fecha" showIcon />
            </div>

            {/* Dropdown para seleccionar categoria */}
            <div className="field">
                <label htmlFor="category">Categoria</label>
                <Dropdown id="category" value={selectedCategory} options={categories} onChange={(e) => setSelectedCategory(e.value)} optionLabel="name" placeholder="Selecciona una categoria" required />
            </div>

            {/*Inversion */}
            <div className="field">
                <label htmlFor="investment">Inversion Recibida</label>
                <InputNumber inputId="currency-us" value={investment} onValueChange={(e) =>  setInvestment(e.target.value)} mode="currency" currency="USD" locale="en-US" />
            </div>
            
            {/*Contact */}
            <div className="field">
                <label htmlFor="contact">Nombre</label>
                <InputText id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Ingresa el Nombre del Contacto" required />
            </div>

            {/* Dropdown para seleccionar el estado de la startup */}
            <div className="field">
                <label htmlFor="status">Categoria</label>
                <Dropdown id="status" value={selectedStatus} options={status} onChange={(e) => setSelectedStatus(e.value)} optionLabel="name" placeholder="Selecciona una categoria" required />
            </div>
            
            {/*Description */}
            <div className="field">
                <label htmlFor="description">Inversion Recibida</label>
                    <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5} cols={30} />
                </div>

            {/* Botón de envío */}
            <div className="field">
                <Button label="Enviar" type="submit" className="p-button-primary" />
            </div>
        </form>
                    </Dialog>
            </div>
            <div className="table-container">
                <DataTable value={customers} paginator header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50]} dataKey="id" selectionMode="checkbox" selection={selectedCustomers} onSelectionChange={(e) => setSelectedCustomers(e.value)}
                    filters={filters} filterDisplay="menu" globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
                    emptyMessage="No customers found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">

                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column field="country.name" header="Country" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                <Column header="Agent" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }}
                    style={{ minWidth: '14rem' }} body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '12rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '12rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
            </DataTable>
            </div>
        </div>
    );
}

export default Startup;
