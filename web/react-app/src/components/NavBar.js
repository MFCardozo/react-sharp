import React from "react";
import {  Routes, Route, Link } from "react-router-dom";
import RegisterNewEmployee from "./RegisterNewEmployee";
import RecordHoursData from "./RecordHoursData";
import Reports from "./Reports";

function NavBar() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/register-new-employee" className="nav-link">
                  Registro Funcionarios Nuevos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/record-hours-data" className="nav-link">
                  Registro de Datos de Entrada y Salida
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reports" className="nav-link">
                  Reportes
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <Routes>
          
        </Routes> */}
      </div>
  );
}

export default NavBar;
