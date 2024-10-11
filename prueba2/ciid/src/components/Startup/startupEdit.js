// EditStartupDialog.js
import React, { useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import StartupForm from './startupCreate';

const EditStartupDialog = ({ visible, onHide, onSubmit, startup }) => {
    useEffect(() => {
        console.log('Startup a editar en startupEdit:', startup); // Esto debería imprimir cuando el startup cambia
    }, [startup]);
    const handleSubmit = (data) => {
        onSubmit(data);
        onHide();
    };

    return (
        <Dialog 
            header="Editar Startup" 
            visible={visible} 
            onHide={onHide}
            style={{ width: '500px' }} 
        >
            <StartupForm 
                initialData={startup} // Aquí pasas los datos de la startup
                onSubmit={handleSubmit}
            />
        </Dialog>
    );
};

export default EditStartupDialog;
