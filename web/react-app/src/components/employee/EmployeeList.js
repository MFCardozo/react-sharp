import React from "react";
import { Table, Button } from "reactstrap";

const EmployeeList = ({
  employees,
  setEmployees,
  toggleModal,
  setCurrentEmployee,
}) => {
  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
    toggleModal();
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div>
      <h1>Lista de Funcionarios</h1>
      <Table>
        <thead>
          <tr>
            <th>Nombre/s</th>
            <th>Apellido/s</th>
            <th>C.I</th>
            <th>Fecha de Nacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.lastName}</td>
              <td>{emp.docNumber}</td>
              <td>{emp.dateBirth}</td>
              <td>
                <Button color="warning" onClick={() => handleEdit(emp)}>
                  Editar
                </Button>{" "}
                <Button color="danger" onClick={() => handleDelete(emp.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeList;
