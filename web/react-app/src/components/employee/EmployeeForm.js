import React, { useContext } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { EmployeeContext } from "../../context";
import FormWithNotification from "../elements/FormWithNotification";

const EmployeeForm = () => {
  const { newEmployee, setNewEmployee, addEmployee } =
    useContext(EmployeeContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h2>Agregar Funcionario</h2>
        <FormWithNotification
          msg={"¡Funcionario Registrado exitosamente!"}
          onSubmitAction={addEmployee}
        >
          <FormGroup>
            <Label for="name" hidden>
              Nombre/s
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre/s"
              value={newEmployee.name}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="lastName" hidden>
              Apellido\s
            </Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Apellido/s"
              value={newEmployee.lastName}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="documentNumber" hidden>
              C.I
            </Label>
            <Input
              type="number"
              name="documentNumber"
              id="documentNumber"
              placeholder="C.I"
              value={newEmployee.documentNumber}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="dateOfBirth" hidden>
              Fecha de Nacimiento
            </Label>
            <Input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="Fecha de Nacimiento"
              value={newEmployee.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <Button color="primary" type="submit">
            Agregar Funcionario
          </Button>
        </FormWithNotification>
      </div>
    </div>
  );
};

export default EmployeeForm;
