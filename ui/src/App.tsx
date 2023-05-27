
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <div>
      <nav>
        <Link to={"/"} className='nav-link'>Home</Link>
        {/* <Link to={"/add-user"} className='nav-link'>Add User</Link> */}
        <Link to={"/login"} className='nav-link'>Login</Link>
        <Link to={"/register"} className='nav-link'>Register</Link>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<Error />}/>
          {/* <Route path='/add-user' element={<AddUser />}/> */}
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/users/:id/edit' element={<EditUser />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
