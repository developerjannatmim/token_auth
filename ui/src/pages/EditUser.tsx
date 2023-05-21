import React, { useEffect, useState,  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [value, setValue] = useState<Record<string, string>>({name: ''});
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser = () => {
        fetch('http://localhost:8000/api/users/'+id+'/edit')
        .then(response => response.json())
        .then(setValue);
    }

    const handleChange = (event: any) => {
        setValue({ [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/users/'+id, {
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json',
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
            </div>
            <button type="submit" className='btn btn-info' style={{marginLeft: "30px", marginTop: "10px"}}>
                Update
            </button>
        </form>
    );
};

export default EditUser;