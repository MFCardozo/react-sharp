import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/employee" className="nav-link">
                Funcionarios
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
    </div>
  );
}

export default NavBar;
