import React from "react";
import { Table, Button } from "reactstrap";
import { formatDate } from "../../util/DateUtils";
import { apiUrl } from "../../config";
import axios from "axios";

const EmployeeList = ({
  employees,
  setEmployees,
  toggleModal,
  setEditingEmployee,
}) => {
  const startEdit = (employee) => {
    setEditingEmployee(employee);
    toggleModal();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/employee/${id}`);
      setEmployees(employees.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const NumberFormatter = ({ numberString }) => {
    const number = parseInt(numberString);
    return <span>{number.toLocaleString("es-ES")}</span>;
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
              <td>{emp.name ? emp.name : "-"}</td>
              <td>{emp.lastName ? emp.lastName : "-"}</td>
              <td>
                {emp.documentNumber ? (
                  <NumberFormatter numberString={emp.documentNumber} />
                ) : (
                  "-"
                )}
              </td>
              <td>{emp.dateOfBirth ? formatDate(emp.dateOfBirth) : "-"}</td>
              <td>
                <Button color="warning" onClick={() => startEdit(emp)}>
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
