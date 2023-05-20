import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); 
       
    const handleDelete = (id: any) => {
        fetch(`http://localhost:8000/api/users/${id}`, { method: 'DELETE' })
        .then((res) => {
            res.json()
            navigate("/");
        })
          
            
    };

    useEffect(() => {
        fetch('http://localhost:8000/api/users')
            .then(response => response.json())
            .then(setUsers);
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: any) => (
                    <tr key={user.id}>
                        <th>{user.id}</th>
                        <th>{user.name}</th>
                        <th>
                            <Link to={{pathname:"/edit-user/"+user.id}} ><button type='button' className='btn btn-info'>Edit</button></Link>
                            <button
                                onClick={() => handleDelete(user.id)}
                                type="button" className='btn btn-danger'
                            >
                                Delete
                            </button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Home;