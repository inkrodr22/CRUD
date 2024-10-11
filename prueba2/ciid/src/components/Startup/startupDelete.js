import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const DeleteConfirmationDialog = ({
  visible,
  onHide,
  onDeleteConfirm,
  startup,
}) => {
  const handleDelete = () => {
    if (startup) {
      onDeleteConfirm(startup._id);
    }
    onHide();
  };

  return (
    <Dialog
      header="Confirmación de Eliminación"
      visible={visible}
      onHide={onHide}
      footer={
        <div>
          <Button
            label="Cancelar"
            icon="pi pi-times"
            onClick={onHide}
            className="p-button-text"
          />
          <Button
            label="Eliminar"
            icon="pi pi-check"
            onClick={handleDelete}
            className="p-button-danger"
          />
        </div>
      }
    >
      <p>¿Estás seguro de que deseas eliminar esta startup?</p>
      <p>
        <strong>{startup && startup.name}</strong>
      </p>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
