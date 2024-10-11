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
        initialData={startup}
        onSubmit={handleSubmit}
        onHide={onHide}
      />
    </Dialog>
  );
};

export default EditStartupDialog;
