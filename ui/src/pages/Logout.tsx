import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate();
  localStorage.clear();
  navigate('/login');
  return (
    <>
        <h1>You have been logged out!!</h1>
        <Link to={'/login'} style={{textDecoration: "none"}}>Login Again</Link>
    </>
  )
}

export default Logout