import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); 
       
    useEffect(() => {
        fetch('http://localhost:8000/api/users')
            .then(response => response.json())
            .then(setUsers);
    }, []);

    const handleDelete = (id: any) => {
        fetch(`http://localhost:8000/api/users/${id}`, { method: 'DELETE' })
        .then((res) => {
            res.json()
            navigate("/");
        });
          
            
    };

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: any) => (
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/users/${user.id}/edit`} ><button type='button' style={{marginRight: "10px"}} className='btn btn-outline-info'>Edit</button></Link>
                            <button
                            onClick={() => handleDelete(user.id)}
                            type="button" className='btn btn-outline-danger'>
                            Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Home;