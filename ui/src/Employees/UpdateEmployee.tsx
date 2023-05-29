import React, { useEffect, useState,  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {
    const [value, setValue] = useState<Record<string, string>>({
      name: '',
      address: '',
      mobile: '',
    });
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(()=>{
        
        fetchUser()
    },[]);

    const fetchUser = () => {
        fetch('http://localhost:8000/api/employees/'+id+'/edit')
        .then(response => response.json())
        .then(setValue);
    }

    const handleChange = (event: any) => {
        setValue(values => ({...values,[event.target.name]: event.target.value}))
    };

    const handleSubmit = (event: any) => {
        const token = sessionStorage.getItem("token");
        event.preventDefault();
        fetch('http://localhost:8000/api/update/'+id, {
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer:' + token,
            },
            method: 'PUT',

        },)
            .then((res) => {
                res.json()
                navigate("/");
            });
               

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
            <label className="col-sm-2 col-form-label" style={{marginLeft: "30px", fontWeight: "bold"}}>Address</label>
       <input style={{marginLeft: "30px"}} type='text' name='address' value={value.address} onChange={handleChange} className='form-control'/>

       <label className="col-sm-2 col-form-label" style={{marginLeft: "30px", fontWeight: "bold"}}>Mobile</label>
       <input style={{marginLeft: "30px"}} type='text' name='mobile' value={value.mobile} onChange={handleChange} className='form-control'/>
            </div>
            <button type="submit" className='btn btn-info' style={{marginLeft: "30px", marginTop: "10px"}}>
              Update
            </button>
        </form>
    );
};

export default UpdateEmployee;