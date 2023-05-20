import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [value, setValue] = useState<Record<string, string>>({ name: '' });
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        setValue({ [event.target.name]: event.target.value });
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
            <input
                name="name"
                onChange={handleChange}
                type="text"
                value={value.name}
            />
            <button type="submit">
                Submit
            </button>
        </form>
    );
};

export default AddUser;