
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Employeelogin.css';
import yourLogo from '../../assets/image (2).png';
import axios from 'axios';

const EmployeeLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      const response = await axios.post('http://localhost:5008/api/users/login', { email, password });
      console.log('Login Successful:', response.data);
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect to employee dashboard after successful login
      navigate('/employee');
    } catch (error) {
      console.error('Login Failed:', error.response?.data);
    }
  };

  return (
    <div className="custom-login-page">
      <div className="custom-login-container">
        <form className="custom-login-form" onSubmit={handleSubmit}>
          <div className="custom-form-logo">
            <img src={yourLogo} alt="Your Logo" className="custom-your-logo" />
          </div>
          <h2>Custom Login</h2>
          <div className="custom-form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="custom-sign-in-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLoginPage;
