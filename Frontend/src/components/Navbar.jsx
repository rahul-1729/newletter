import React, { useState } from 'react';
import styles from '../styles/HomePage.module.css';
import { useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function redirect_signup()
  {
     () => setIsOpen(false);
     navigate('/signup')
  }

  function redirect_about()
  {
     () => setIsOpen(false);
     navigate('/about')
  }

  function redirect_login()
  {
     () => setIsOpen(false);
     navigate('/signin')
  }

  return (
    <div>
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
       <button className={styles.navbarToggle} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.navbarIcon}></span>
          <span className={styles.navbarIcon}></span>
          <span className={styles.navbarIcon}></span>
        </button>
        <div className={`${styles.navbarMenu}`}>
          <a href="#signup" className={styles.navbarItem}>Signup</a>
          <a href="#login" className={styles.navbarItem}>Login</a>
          <a href="#about" className={styles.navbarItem}>About</a>
        </div>
        <div className={styles.navbarBrand}>My Website</div>
      </div>
    </nav>
     <div className={`${styles.sliderMenu} ${isOpen ? styles.isOpen : ''}`}>
     <a href="" className={styles.sliderItem} onClick={redirect_signup}>Signup</a>
     <a href="" className={styles.sliderItem} onClick={redirect_login}>Login</a>
     <a href="" className={styles.sliderItem} onClick={redirect_about}>About</a>
   </div>
   </div>
  );
};

export default Navbar;
