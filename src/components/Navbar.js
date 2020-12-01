import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let { pathname } = useLocation();
  if (pathname.startsWith("/")) {
    pathname = pathname.substring(1);
  }
  console.log(pathname);
  const links = ["home", "about", "contact"];
  return (
    <header className={styles.container}>
      <nav className={styles.center}>
        <Link className='btn' to='/'>
          Search Movies
        </Link>
        <ul className={styles.navbarLinks}>
          {links.map((link, index) => {
            let className = "link";
            if (link === pathname) {
              className = "currentLink";
            } else if (link === "home" && pathname === "") {
              className = "currentLink";
            }

            return (
              <li key={index} className={className}>
                <Link to={link === "home" ? "/" : `/${link}`}>{`${link}`}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
