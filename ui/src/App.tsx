
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'

function App() {

  return (
    <div>
      <nav>
        <Link to={"/"} className='nav-link'>Home</Link>
        <Link to={"/add-user"} className='nav-link'>Add User</Link>
        
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<Error />}/>
          <Route path='/add-user' element={<AddUser />}/>
          <Route path='/users/:id/edit' element={<EditUser />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
