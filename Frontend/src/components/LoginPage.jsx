
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/LoginPage.module.css'; // Import the CSS Module

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const userExists = await axios.post('http://localhost:3500/api/v1/signin', userData);
      console.log(userExists.data.token);
      console.log(userExists.data.message);
      if (userExists.data.message) {
        navigate('/home'); // Proceed with login
      } else {
        setError("Wrong Credentials");
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={styles.inputGroup}>
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
        <div className={styles.inputGroup}>
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
        <button type="submit" className={styles.button}>Login</button>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <p className={styles.para}>
          Create an account <Link to="/signup" className={styles.noUnderline}>SignUp</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
