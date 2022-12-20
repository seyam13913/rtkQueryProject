import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmploy from "./component/AddEmploy";
import EmploysCrud from "./component/EmploysCrud";
import Home from "./component/Home";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Navber from "./Navber";

function App() {
  return (
    <div className="App">
      <navber />
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/addEmploy" element={<AddEmploy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employ" element={<EmploysCrud />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
