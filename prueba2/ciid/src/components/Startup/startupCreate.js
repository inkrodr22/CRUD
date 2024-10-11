import { useEffect, useState, useMemo } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { createStartup, updateStartup } from "../../api/startups";
import Swal from 'sweetalert2';

const StartupForm = ({ onClose, initialData, onHide, onSuccess}) => {
  const [name, setName] = useState("");
  const [foundedDate, setFoundedDate] = useState(null);
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [investmentReceived, setInvestmentReceived] = useState(null);
  const [description, setDescription] = useState("");
  const [employees, setEmployees] = useState(0);

  const categories = useMemo(
    () => [
      { name: "Software as a Service", code: "saas" },
      { name: "Tecnología Financiera", code: "fintech" },
      { name: "Inteligencia Artificial", code: "IA" },
      { name: "Ciberseguridad", code: "Ciberseguridad" },
      { name: "Realidad Virtual", code: "VR" },
    ],
    []
  );

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setFoundedDate(new Date(initialData.foundedDate));
      setLocation(initialData.location);
      setSelectedCategory(
        categories.find((cat) => cat.code === initialData.category)
      );
      setInvestmentReceived(initialData.investmentReceived);
      setDescription(initialData.description);
      setEmployees(initialData.employees);
    }
  }, [initialData, categories]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      foundedDate,
      location,
      category: selectedCategory ? selectedCategory.code : "",
      investmentReceived,
      description,
      employees,
    };

    try {
        if (initialData) {
            const id = initialData._id;
            await updateStartup(id, formData);
            console.log("Actualizar la startup:", formData);
            Swal.fire({
              title: 'Éxito!',
              text: 'La startup ha sido actualizada correctamente.',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
            onHide();
      } else {
        await createStartup(formData);
        console.log("Startup creada correctamente");
        Swal.fire({
          title: 'Éxito!',
          text: 'La startup ha sido creada correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }

      onSuccess();
    } catch (error) {
        console.error("Error creando o editando la startup:", error);
        Swal.fire({
          title: 'Error!',
          text: 'Hubo un problema al crear o actualizar la startup.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Nombre</label>
          <InputText
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa el nombre"
            required
            disabled={!!initialData}
          />
        </div>
        <div className="form-field">
          <label htmlFor="foundedDate">Fecha de Fundación</label>
          <Calendar
            id="foundedDate"
            value={foundedDate}
            onChange={(e) => setFoundedDate(e.value)}
            dateFormat="dd/mm/yy"
            placeholder="Selecciona la fecha"
            showIcon
            required
            disabled={!!initialData}
            />
        </div>
        <div className="form-field">
          <label htmlFor="location">Ubicación</label>
          <InputText
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ingresa la ubicación"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="category">Categoría</label>
          <Dropdown
            id="category"
            value={selectedCategory}
            options={categories}
            onChange={(e) => setSelectedCategory(e.value)}
            optionLabel="name"
            placeholder="Selecciona una categoría"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="investmentReceived">Inversión Recibida</label>
          <InputNumber
            inputId="investmentReceived"
            value={investmentReceived}
            onValueChange={(e) => setInvestmentReceived(e.value)}
            mode="currency"
            currency="USD"
            locale="en-US"
            required
            min={0}
          />
        </div>
        <div className="form-field">
          <label htmlFor="employees">Número de Empleados</label>
          <InputNumber
            inputId="employees"
            value={employees}
            onValueChange={(e) => setEmployees(e.value)}
            min={0}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Descripción</label>
          <InputTextarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            cols={30}
            required
          />
        </div>
        <div className="footer">
          <Button
            label="Cancelar"
            icon="pi pi-times"
            onClick={onClose}
            className="cancel-button"
          />
          <Button
            label="Enviar"
            icon="pi pi-check"
            onClick={onClose}
            className="submit-button"
          />
        </div>
      </form>
    </div>
  );
};

export default StartupForm;
