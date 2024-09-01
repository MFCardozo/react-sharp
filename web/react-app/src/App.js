import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.js";
import RecordHoursData from "./components/record_hour/RecordHoursData.js";
import Reports from "./components/report/EmployeeReport.js";
import Employee from "./components/employee/Employee.js";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App App-color">
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route element={<Menu />} />
          <Route path="/employee" element={<Employee />} />

          <Route path="/record-hours-data" element={<RecordHoursData />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
