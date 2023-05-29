import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [value, setValue] = useState<Record<string, string>>({ 
        name: '',
        address: '',
        mobile: '',

    });
       
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        setValue(values => ({...values,[event.target.name]: event.target.value}))
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/save', {
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json',   
            },
            method: 'POST',
        })
        .then((res) => {
            res.json()
            navigate("/");
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 style={{marginLeft: "30px"}}>Add Employee Information</h2>
            <label className="col-sm-2 col-form-label" style={{marginLeft: "30px", fontWeight: "bold"}}>Name</label>
            <div className="col-sm-5">
            <input
                style={{marginLeft: "30px"}}
                className="form-control"
                name="name"
                onChange={handleChange}
                type="text"
                value={value.name}
            />
        <label className="col-sm-2 col-form-label" style={{marginLeft: "30px", fontWeight: "bold"}}>Address</label>
       <input style={{marginLeft: "30px"}} type='text' name='address' value={value.address} onChange={handleChange} className='form-control mb-2'/>

       <label className="col-sm-2 col-form-label" style={{marginLeft: "30px", fontWeight: "bold"}}>Mobile</label>
       <input style={{marginLeft: "30px"}} type='text' name='mobile' value={value.mobile} onChange={handleChange} className='form-control mb-2'/>
            </div>
            <button type="submit" className='btn btn-info' style={{marginLeft: "30px", marginTop: "10px"}}>
                Add Employee
            </button>
        </form>
    );
};

export default AddEmployee;