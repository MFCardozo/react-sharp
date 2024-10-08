import React, { createContext, useState, useEffect } from "react";
import { serverApi } from "./apis/ServerApi";
import { apiUrl } from "./config";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  // listado de funcionarios
  const [employees, setEmployees] = useState([]);

  // form de funcionario
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    lastName: "",
    documentNumber: "",
    dateOfBirth: "",
  });

  //modal de edicion
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [modal, setModal] = useState(false);

  // form de registro hora
  const [newHourData, setNewHourData] = useState({
    employeeId: "",
    dateRegister: "",
    startHour: "",
    finishHour: "",
  });

  // filtro de reporte de funcionario
  const [newEmployeeReportFilter, setNewEmployeeReportFilter] = useState({
    employeeId: "",
    startDate: "",
    endDate: "",
  });
  // alerta del filtro de reporte
  const [filterApplied, setFilterApplied] = useState(null);

  // listado de reporte de funcionario
  const [employeeReport, setEmployeeReport] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const editEmployee = async (e) => {
    e.preventDefault();
    try {
      const response = await serverApi.put(
        `${apiUrl}/employee/${editingEmployee.id}`,
        editingEmployee,
      );
      if (!response.status?.toString().startsWith("20")) {
        console.error(`Error editing employee:`, JSON.stringify(response));
      }
      fetchEmployees();
      toggleModal();
      setEditingEmployee(null);
    } catch (error) {
      console.error("Error editing employee:", error);
    }
    toggleModal();
  };

  const deleteEmployee = async (id) => {
    try {
      await serverApi.delete(`${apiUrl}/employee/${id}`);
      setEmployees(employees.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await serverApi.get(`${apiUrl}/Employee`);
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  const startEdit = (employee) => {
    setEditingEmployee(employee);
    toggleModal();
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  const addEmployee = async () => {
    try {
      const response = await serverApi.post(`${apiUrl}/employee`, newEmployee);
      setEmployees([...employees, response.data]);
      setNewEmployee({
        name: "",
        lastName: "",
        documentNumber: "",
        dateOfBirth: "",
      }); // Limpiar form
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const addHourData = async () => {
    try {
      newHourData.startHour = `${newHourData.startHour}:00`;
      newHourData.finishHour = `${newHourData.finishHour}:00`;
      await serverApi.post(
        `${apiUrl}/HourRegister`,
        newHourData,
      );
      setNewHourData({
        employeeId: "",
        dateRegister: "",
        startHour: "",
        finishHour: "",
      }); // Limpiar form
    } catch (error) {
      console.error("Error adding HourData:", error);
    }
  };

  const getEmployeeReport = async (e) => {
    e.preventDefault();
    try {
      const response = await serverApi.get(`${apiUrl}/EmployeeHourReport`, {
        params: {
          employeeId: newEmployeeReportFilter.employeeId,
          startDate: newEmployeeReportFilter.startDate,
          endDate: newEmployeeReportFilter.endDate,
        },
      });
      setEmployeeReport(response.data);
      setFilterApplied(null);
    } catch (error) {
      if (error.status?.toString().startsWith("40")) {
        setFilterApplied("¡No se encontro ningun registro para el Funcionario!");
      } else {
        setFilterApplied("¡Ocurrio un error al filtrar el reporte para el Funcionario!");
        console.error("Error getting Employee Report:", error);
      }
    }
    finally{
      setTimeout(() => setFilterApplied(null), 5000);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        newEmployee,
        setNewEmployee,
        editingEmployee,
        setEditingEmployee,
        addEmployee,
        editEmployee,
        deleteEmployee,
        modal,
        startEdit,
        toggleModal,
        newHourData,
        setNewHourData,
        addHourData,
        newEmployeeReportFilter,
        setNewEmployeeReportFilter,
        employeeReport,
        getEmployeeReport,
        filterApplied
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
export { EmployeeContext, EmployeeProvider };
