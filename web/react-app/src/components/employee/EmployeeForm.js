import React, { useState } from "react";
import { Button, FormGroup, Label, Input, Form } from "reactstrap";

const EmployeeForm = ({ employees, setEmployees }) => {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    lastName: "",
    docNumber: "",
    dateBirth: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevState) => ({ ...prevState, [name]: value }));
  };

  const addEmployee = () => {
    const id = employees.length ? employees[employees.length - 1].id + 1 : 1;
    setEmployees([...employees, { id, ...newEmployee }]);
    setNewEmployee({ name: "", lastName: "", docNumber: "", dateBirth: "" }); // Limpiar formulario
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h2>Agregar Funcionario</h2>
        <Form
          inline
          onSubmit={(e) => {
            e.preventDefault();
            addEmployee();
          }}
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
            <Label for="docNumber" hidden>
              C.I
            </Label>
            <Input
              type="text"
              name="docNumber"
              id="docNumber"
              placeholder="C.I"
              value={newEmployee.docNumber}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="dateBirth" hidden>
              Fecha de Nacimiento
            </Label>
            <Input
              type="text"
              name="dateBirth"
              id="dateBirth"
              placeholder="Fecha de Nacimiento"
              value={newEmployee.dateBirth}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <Button color="primary" type="submit">
            Agregar Funcionario
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EmployeeForm;
