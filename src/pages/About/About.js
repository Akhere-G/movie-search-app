import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className='section'>
      <div className={styles.about}>
        <h3>About Me</h3>
        <p>
          This website is built using react for the front end. The api used is
          themoviedb. A global context is used to manage state and a high order
          component is used to load images with a fade in animation
        </p>
      </div>
    </section>
  );
};

export default About;
