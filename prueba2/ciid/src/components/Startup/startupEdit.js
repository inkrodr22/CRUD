import React from "react";
import { Dialog } from "primereact/dialog";
import StartupForm from "./startupCreate";

const EditStartupDialog = ({ visible, onHide, startup, onSuccess }) => {

  

  return (
    <Dialog
      header="Editar Startup"
      visible={visible}
      onHide={onHide}
      style={{ width: "500px" }}
    >
      <StartupForm
        initialData={startup}
        onHide={onHide}
        onSuccess={onSuccess}
      />
    </Dialog>
  );
};

export default EditStartupDialog;

