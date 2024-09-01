import React, { useContext } from "react";
import { Container, Table, Button } from "reactstrap";
import EmployeeForm from "./EmployeeForm";
import { formatDate } from "../../util/DateUtils";
import ModalEmployee from "./ModalEmployee";
import { EmployeeContext } from "../../context";
const Employee = () => {
  const { employees, deleteEmployee, startEdit } = useContext(EmployeeContext);

  const NumberFormatter = ({ numberString }) => {
    const number = parseInt(numberString);
    return <span>{number.toLocaleString("es-ES")}</span>;
  };

  return (
    <div>
      <Container>
        <>
          <EmployeeForm />
          <hr></hr>
          {employees.length > 0 && (
            <>
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
                      <td>
                        {emp.dateOfBirth ? formatDate(emp.dateOfBirth) : "-"}
                      </td>
                      <td>
                        <Button color="warning" onClick={() => startEdit(emp)}>
                          Editar
                        </Button>{" "}
                        <Button
                          color="danger"
                          onClick={() => deleteEmployee(emp.id)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
          <ModalEmployee />
        </>
      </Container>
    </div>
  );
};

export default Employee;
