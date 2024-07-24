import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.homepageContainer}>
        <h1>Welcome to My Website</h1>
        <p>This is the homepage content.</p>
      </div>
    </div>
  );
};

export default HomePage;
