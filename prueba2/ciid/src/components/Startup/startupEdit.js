import React from "react";
import { Dialog } from "primereact/dialog";
import StartupForm from "./startupCreate";

const EditStartupDialog = ({ visible, onHide, onSubmit, startup }) => {
  const handleSubmit = (data) => {
    onSubmit(data);
    onHide();
  };

  return (
    <Dialog
      header="Editar Startup"
      visible={visible}
      onHide={onHide}
      style={{ width: "500px" }}
    >
      <StartupForm
        initialData={startup} // Aquí pasas los datos de la startup
        onSubmit={handleSubmit}
        onHide={onHide} 
        onSuccess={fetchStartups} // Pasa onHide aquí para que el modal se cierre correctamente
      />
    </Dialog>
  );
};

export default EditStartupDialog;
