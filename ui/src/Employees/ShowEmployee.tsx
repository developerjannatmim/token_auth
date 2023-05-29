/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowEmployee = () => {
  const [value, setValue] = useState({
    name: "",
    address: "",
    mobile: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch("http://localhost:8000/api/employees/" + id + "/edit")
      .then((response) => response.json())
      .then(setValue);
  };

  return (
    <div>
      <h1>Employee Information</h1>
      <div className="card p-4">
        <h2>Name</h2>
        <p>{value.name}</p>
        <h2>Email</h2>
        <p>{value.address}</p>
        <h2>Mobile</h2>
        <p>{value.mobile}</p>
      </div>
    </div>
  );
};

export default ShowEmployee;
