import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Logic to check if user exists
    const userData = {
      email,
      password,
    };
  
    const userExists = await axios.post('http://localhost:3500/api/v1/signin', userData); 
    console.log(userExists.data.token)
     console.log(userExists.data.message)
    if (userExists.data.message) {
      // Proceed with login
      navigate('/home');
    } else {
      setError("wrong Credentials")
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error&&<p className='throwError'>{error}</p>}
        <p className="para">
          Create an account <Link to="/signup" className="no-underline">SignUp</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
