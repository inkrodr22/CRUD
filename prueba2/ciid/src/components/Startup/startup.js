import { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import StartupForm from './startupForm';
import StartupTable from './startupTable';
import './Startup.scss';
import { customers, filters, header } from './data';

const Startup = () => {
    const [visible, setVisible] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState([]);

    useEffect(() => {
    }, []);

    return (
        <div className='Modal'>
            <p>Startup</p>
            <Button 
                label="Crear Startup" 
                type="submit" 
                className="p-button-primary" 
                onClick={() => setVisible(true)} 
            />
            <Dialog 
                visible={visible} 
                header="Crear Startup" 
                style={{ width: '500px'}} 
                onHide={() => setVisible(false)}
            >
                <StartupForm onClose={() => setVisible(false)} />
            </Dialog>
            <StartupTable customers={customers} selectedCustomers={selectedCustomers} setSelectedCustomers={setSelectedCustomers} />
        </div>
    );
}

export default Startup;
