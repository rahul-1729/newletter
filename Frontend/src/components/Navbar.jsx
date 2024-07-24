import React, { useState } from 'react';
import styles from '../styles/HomePage.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>My Website</div>
        <button className={styles.navbarToggle} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.navbarIcon}></span>
          <span className={styles.navbarIcon}></span>
          <span className={styles.navbarIcon}></span>
        </button>
        <div className={`${styles.navbarMenu} ${isOpen ? styles.isOpen : ''}`}>
          <a href="#signup" className={styles.navbarItem}>Signup</a>
          <a href="#login" className={styles.navbarItem}>Login</a>
          <a href="#update" className={styles.navbarItem}>Update</a>
          <a href="#delete" className={styles.navbarItem}>Delete</a>
          <a href="#about" className={styles.navbarItem}>About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
