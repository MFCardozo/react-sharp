import React, { useState } from "react";
import { Container } from "reactstrap";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import ModalEmployee from "./ModalEmployee";

const Employee = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Maria",
      lastName: "Gomez",
      docNumber: "47545664",
      dateBirth: "22/07/1199",
    },
    {
      id: 2,
      name: "Juan",
      lastName: "Perez",
      docNumber: "651654",
      dateBirth: "22/07/1199",
    },
  ]);

  // const [employees, setEmployees] = useState([
  // ]);

  const [modal, setModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Container>
        <>
          <EmployeeForm employees={employees} setEmployees={setEmployees} />
          <hr></hr>
          {employees.length > 0 && (
            <EmployeeList
              employees={employees}
              setEmployees={setEmployees}
              toggleModal={toggleModal}
              setCurrentEmployee={setCurrentEmployee}
            />
          )}

          <ModalEmployee
            toggleModal={toggleModal}
            modal={modal}
            currentEmployee={currentEmployee}
          />
        </>
      </Container>
    </div>
  );
};

export default Employee;
