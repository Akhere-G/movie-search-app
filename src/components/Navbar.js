import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import MovieIcon from "@material-ui/icons/Movie";

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbarCenter}>
        <div>
          <Link to='/'>
            <span className={styles.navbarHeader}>
              <div className={styles.navLogo}>
                <h3>Search Movie</h3>
              </div>
            </span>
          </Link>
        </div>
        <ul className={styles.navbarLinks}>
          <li className={styles.navbarLink}>
            <Link to='/'>home</Link>
          </li>
          <li className={styles.navbarLink}>
            <Link to='/about'>about</Link>
          </li>
          <li className={styles.navbarLink}>
            <Link to='/contact'>contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
