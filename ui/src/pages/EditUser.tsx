import React, { useEffect, useState,  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [value, setValue] = useState<Record<string, string>>({name: ''});
    const navigate = useNavigate();
    const {id} = useParams();


    const handleChange = (event: any) => {
        setValue({ [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/users/', {
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',

        })
            .then((res) => {
                res.json()
                navigate("/");
            });
               

    };

    useEffect(() => {
        fetch('http://localhost:8000/api/users/'+id)
            .then(response => response.json())
            .then(setValue)

            
            
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                onChange={handleChange}
                type="text"
                value={value.name}
            />
            <button type="submit">
                Update
            </button>
        </form>
    );
};

export default EditUser;