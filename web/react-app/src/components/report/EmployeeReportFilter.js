import React, { useContext } from "react";
import { Button, FormGroup, Label, Input, Form } from "reactstrap";
import { EmployeeContext } from "../../context";

const EmployeeReportFilter = () => {
  const {
    employees,
    newEmployeeReportFilter,
    setNewEmployeeReportFilter,
    getEmployeeReport,
  } = useContext(EmployeeContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployeeReportFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <Form inline onSubmit={getEmployeeReport}>
          <FormGroup>
            <Label for="employeeId" hidden>
              Selecionar Funcionario
            </Label>
            <Input
              type="select"
              name="employeeId"
              id="employeeId"
              value={newEmployeeReportFilter.employeeId}
              required
              onChange={handleInputChange}
            >
              <option value="">Elija un funcionario...</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name} {emp.lastName}
                </option>
              ))}
            </Input>
          </FormGroup>{" "}
          <FormGroup>
            <Label for="startDate" hidden>
              Fecha (Desde)
            </Label>
            <Input
              type="date"
              name="startDate"
              id="startDate"
              placeholder="Fecha (Desde)"
              value={newEmployeeReportFilter.startDate}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="endDate" hidden>
              Fecha de Registro
            </Label>
            <Input
              type="date"
              name="endDate"
              id="endDate"
              placeholder="Fecha (Hasta)"
              value={newEmployeeReportFilter.endDate}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <Button color="primary" type="submit">
            Filtrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EmployeeReportFilter;
