import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import DeleteConfirmationDialog from "./startupDelete";
import EditStartupDialog from "./startupEdit";

const StartupTable = ({ startups, onEdit, onDelete }) => {
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [startupToDelete, setStartupToDelete] = useState(null);
  const [startupToEdit, setStartupToEdit] = useState(null);

  const actionBodyTemplate = (rowData) => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          icon="pi pi-pencil"
          onClick={() => confirmEdit(rowData)}
          className="p-button-text"
        />
        <Button
          icon="pi pi-trash"
          onClick={() => confirmDelete(rowData)}
          className="p-button-text p-button-danger"
          style={{ marginLeft: "0.5rem" }}
        />
      </div>
    );
  };

  const confirmEdit = (startup) => {
    setStartupToEdit(startup);
    console.log("Startup a editar:", startup);
    setVisibleEdit(true);
  };

  const confirmDelete = (startup) => {
    setStartupToDelete(startup);
    setVisibleDelete(true);
  };

  const hideDeleteDialog = () => {
    setVisibleDelete(false);
    setStartupToDelete(null);
  };

  const hideEditDialog = () => {
    setVisibleEdit(false);
    setStartupToEdit(null);
  };

  const handleDelete = (id) => {
    onDelete(id);
    hideDeleteDialog();
  };

  const handleEditSubmit = (updatedData) => {
    console.log("Datos a actualizar:", updatedData);
    onEdit(updatedData);
    hideEditDialog();
  };

  return (
    <div className="table-container">
      {" "}
      <DataTable
        value={startups}
        paginator
        header="Startups List"
        rows={10}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        rowsPerPageOptions={[10, 25, 50]}
        dataKey="_id"
        emptyMessage="No startups found."
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      >
        <Column
          field="name"
          header="Nombre"
          sortable
          filter
          filterPlaceholder="Search by name"
          style={{ minWidth: "10rem" }}
        />
        <Column
          field="foundedDate"
          header="Fecha de Fundación"
          sortable
          body={(rowData) => {
            const date = new Date(rowData.foundedDate);
            return `${date.getDate().toString().padStart(2, "0")}/${(
              date.getMonth() + 1
            )
              .toString()
              .padStart(2, "0")}/${date.getFullYear()}`;
          }}
          style={{ minWidth: "10rem" }}
        />
        <Column
          field="location"
          header="Ubicación"
          sortable
          style={{ minWidth: "10rem" }}
        />
        <Column
          field="category"
          header="Categoria"
          sortable
          style={{ minWidth: "10rem" }}
        />
        <Column field="investmentReceived" header="Inversión" sortable />
        <Column
          field="description"
          header="Descripción"
          sortable
          style={{ minWidth: "14rem" }}
        />
        <Column field="employees" header="Empleados" sortable />
        <Column
          header="Acciones"
          headerStyle={{ width: "5rem", textAlign: "center" }}
          body={actionBodyTemplate}
        />
      </DataTable>
      <DeleteConfirmationDialog
        visible={visibleDelete}
        onHide={hideDeleteDialog}
        onDeleteConfirm={handleDelete}
        startup={startupToDelete}
      />
      <EditStartupDialog
        visible={visibleEdit}
        onHide={hideEditDialog}
        onSubmit={handleEditSubmit}
        startup={startupToEdit}
      />
    </div>
  );
};

export default StartupTable;
