import React, { useContext } from "react";
import { Container, Table } from "reactstrap";
import { formatDate } from "../../util/DateUtils";
import { EmployeeContext } from "../../context";
import EmployeeReportFilter from "./EmployeeReportFilter";

const EmployeeReport = () => {
  const { employeeReport } = useContext(EmployeeContext);

  {
    const NumberFormatter = ({ numberString }) => {
      const number = parseFloat(numberString);
      return <span>{number.toLocaleString("es-ES")}</span>;
    };

    return (
      <div>
        <Container>
          <>
            <h2>Reporte de Funcionarios</h2>
            <EmployeeReportFilter />
            <hr></hr>
            {employeeReport?.length > 0 && (
              <>
                <h1>Lista de Horarios</h1>
                <Table>
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Hora Entrada</th>
                      <th>Hora Salida</th>
                      <th>Cant. de Horas</th>
                      <th>Cant. de Horas Acumuladas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeReport.map((emp, i) => (
                      <tr key={i}>
                        <td>
                          {emp.dateRegister
                            ? formatDate(emp.dateRegister)
                            : "-"}
                        </td>
                        <td>{emp.startHour ? emp.startHour : "-"}</td>
                        <td>{emp.endHour ? emp.endHour : "-"}</td>
                        <td>
                          {emp.quantityHour ? (
                            <NumberFormatter numberString={emp.quantityHour} />
                          ) : (
                            "-"
                          )}
                        </td>
                        <td>
                          {emp.quantityHourSum ? (
                            <NumberFormatter
                              numberString={emp.quantityHourSum}
                            />
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
          </>
        </Container>
      </div>
    );
  }
};

export default EmployeeReport;
