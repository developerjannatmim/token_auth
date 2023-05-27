import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [value, setValue] = useState<Record<string, string>>({ 
        name: '',
        email: '',
        password: '',

    });
       
    
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        setValue(values => ({...values,[event.target.name]: event.target.value}))
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/users', {
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
        <label className="col-sm-2 col-form-label" style={{marginLeft: "30px", fontWeight: "bold"}}>Email</label>
       <input style={{marginLeft: "30px"}} type='email' name='email' value={value.email} onChange={handleChange} className='form-control mb-2'/>

       <label className="col-sm-2 col-form-label" style={{marginLeft: "30px", fontWeight: "bold"}}>Password</label>
       <input style={{marginLeft: "30px"}} type='password' name='password' value={value.password} onChange={handleChange} className='form-control mb-2'/>
            </div>
            <button type="submit" className='btn btn-info' style={{marginLeft: "30px", marginTop: "10px"}}>
                Add User
            </button>
        </form>
    );
};

export default AddUser;