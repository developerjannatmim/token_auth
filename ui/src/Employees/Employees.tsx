import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    
    fetch("http://localhost:8000/api/employees",{
      headers: {
        'Content-Type': 'application/json',  
    },
    method: 'GET',
    })
      .then((response) => response.json())
      .then(setEmployees);
  }, []);

  const handleDelete = (id: any) => {
    fetch(`http://localhost:8000/api/delete/${id}`, { method: "DELETE" }).then(
      (res) => {
        res.json();
        navigate("/");
      }
    );
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Mobile</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee: any) => (
          <tr key={employee.id}>
            <th scope="row">{employee.id}</th>
            <td>{employee.name}</td>
            <td>{employee.address}</td>
            <td>{employee.mobile}</td>
            <td>
              <Link to={`/employees/${employee.id}/edit`}>
                <button
                  type="button"
                  style={{ marginRight: "10px" }}
                  className="btn btn-outline-info"
                >
                  Edit
                </button>
              </Link>
              <Link to={"/view/" + employee.id}>
                <button
                  type="button"
                  style={{ marginRight: "10px" }}
                  className="btn btn-outline-primary"
                >
                  View
                </button>
              </Link>
              <button
                onClick={() => handleDelete(employee.id)}
                type="button"
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Employees;
