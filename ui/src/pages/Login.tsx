import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [value, setValue] = useState<Record<string, string>>({
    email: '',
    password: '',
});


  const navigate = useNavigate();

  useEffect(() =>{
    if(localStorage.getItem('user-info')){
    navigate('/');
    }
  },[]);

  const handleChange = (event: any) => {
    setValue(values => ({...values,[event.target.name]: event.target.value}))
};



  const handleSubmit = (event: any) => {
    event.preventDefault();
     fetch('http://localhost:8000/api/login', {
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    })
    .then(res => res.json())
    
    .then(resData => {
      localStorage.setItem('user-info', JSON.stringify(resData))
      if(resData.message){
        alert("not a valid user");
        navigate('/login');
      }else{
        alert("login successful");
        navigate('/');
      }
      
      console.log(resData);
      
    })
};
  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <h1></h1>
          <div className="col-sm-5">
          <label className="col-sm-2 col-form-label" style={{marginLeft: "30px", fontWeight: "bold"}}>Email</label>
          <input style={{marginLeft: "30px"}} type='email' onChange={handleChange} name='email' className='form-control' placeholder="email address" required />
          {/* <strong style={{marginLeft: "30px", fontWeight: "bold", color: 'red'}}>Invalid Email</strong><br /> */}

          <label className="col-sm-2 col-form-label" style={{marginLeft: "30px", fontWeight: "bold"}}>Password</label>
          <input style={{marginLeft: "30px"}} type='password' onChange={handleChange} name='password' className='form-control' placeholder="Password" required />
          {/* <strong style={{marginLeft: "30px", fontWeight: "bold", color: 'red'}}>Invalid Password</strong><br /> */}
          </div>
          <button type='submit' className='btn btn-primary btn-sm' style={{marginLeft: "30px", marginTop: "10px"}}>Sign in</button>
        </form>
      </main>
    </>
  )
}

export default Login