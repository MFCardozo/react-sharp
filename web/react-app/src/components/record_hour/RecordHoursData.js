import React, { useContext } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { EmployeeContext } from "../../context";
import FormWithNotification from "../elements/FormWithNotification";

const RecordHoursData = () => {
  const { employees, newHourData, setNewHourData, addHourData } =
    useContext(EmployeeContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHourData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h2>Registrar Hora de Entrada/Salida</h2>
        <FormWithNotification
          msg={"¡Hora Registrada exitosamente!"}
          onSubmitAction={addHourData}
        >
          <FormGroup>
            <Label for="employeeId" hidden>
              Selecionar Funcionario
            </Label>
            <Input
              type="select"
              name="employeeId"
              id="employeeId"
              value={newHourData.employeeId}
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
            <Label for="dateRegister" hidden>
              Fecha de Registro
            </Label>
            <Input
              type="date"
              name="dateRegister"
              id="dateRegister"
              placeholder="Fecha de Registro"
              value={newHourData.dateRegister}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="startHour" hidden>
              Hora De Entrada
            </Label>
            <Input
              type="time"
              name="startHour"
              id="startHour"
              placeholder="Hora De Entrada"
              value={newHourData.startHour}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="endHour" hidden>
              Fecha de Registro
            </Label>
            <Input
              type="time"
              name="finishHour"
              id="finishHour"
              placeholder="Fecha de Salida"
              value={newHourData.finishHour}
              onChange={handleInputChange}
              required
            />
          </FormGroup>{" "}
          <Button color="primary" type="submit">
            Agregar Registro
          </Button>
        </FormWithNotification>
      </div>
    </div>
  );
};

export default RecordHoursData;
