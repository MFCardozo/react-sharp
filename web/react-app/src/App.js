import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Menu from "./components/Menu.js";
import RegisterNewEmployee from "./components/RegisterNewEmployee";
import RecordHoursData from "./components/RecordHoursData";
import Reports from "./components/Reports";
function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <NavBar />
        
        <Routes>
          <Route exact path="/" element={<Menu/>} />
          <Route element={<Menu/>} />
          <Route
            path="/register-new-employee"
            element={<RegisterNewEmployee />}
          />
          <Route path="/record-hours-data" element={<RecordHoursData />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
