import React, { useContext, useState } from 'react'
import { GeneralContext } from '../context/GeneralContext';
import axios from 'axios';
import api from './api'; // adjust path as needed

const Register = ({setIsLogin}) => {

  const {setUsername, setEmail, setPassword, setUsertype, register} = useContext(GeneralContext);
  const [error, setError] = useState(null); // Add error state

  const handleRegister = async (e) =>{
    e.preventDefault();
    setError(null); // Reset error before trying
    try {
      await register()
    } catch (err) {
      setError("Network error: Unable to register. Please try again later.");
    }
  }

  const fetchBanner = async () => {
    try {
      const response = await api.get('/api/banner'); // use the api instance
      return response.data;
    } catch (error) {
      console.error("There was an error fetching the banner!", error);
    }
  }

  return (
    <form className="authForm">
        <h2>Register</h2>
        {error && <div style={{color: 'red', marginBottom: 10}}>{error}</div>}
        <div className="form-floating mb-3 authFormInputs">
            <input type="text" className="form-control" id="floatingInput" placeholder="username"
                                                       onChange={(e)=> setUsername(e.target.value)} />
            <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3 authFormInputs">
            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
                                                       onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3 authFormInputs">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                                       onChange={(e)=> setPassword(e.target.value)} /> 
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" 
                                                      onChange={(e)=> setUsertype(e.target.value)}>
          <option value="">User type</option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
        
        <button className="btn btn-primary" onClick={handleRegister}>Sign up</button>
        <p>Already registered? <span onClick={()=> setIsLogin(true)}>Login</span></p>
    </form>
  )}
export default Register;