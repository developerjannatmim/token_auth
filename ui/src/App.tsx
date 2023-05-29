import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Employees from "./Employees/Employees";
import UpdateEmployee from "./Employees/UpdateEmployee";
import ShowEmployee from "./Employees/ShowEmployee";
import AddEmployee from "./Employees/AddEmployee";

function App() {
  return (
    <div>
      <nav>
        {/*Employee Links */}
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/add-employee"} className="nav-link">
          Add
        </Link>

        {/*Public Links */}
        <Link to={"/login"} className="nav-link">
          Login
        </Link>
        <Link to={"/register"} className="nav-link">
          Register
        </Link>
      </nav>
      <div>
        <Routes>
          {/* Employee Routes */}
          <Route path="/" element={<Employees />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/view/:id" element={<ShowEmployee />} />
          <Route path="/employees/:id/edit" element={<UpdateEmployee />} />
          <Route path="*" element={<Error />} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
