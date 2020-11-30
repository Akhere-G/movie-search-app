import React from "react";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <section className='section'>
      <div className={styles.about}>
        <h3>About Me</h3>
        <p>
          My name is Akhere Ihoeghinlan. I am a Computer Science student at UCL
          and a web developer, who is passionate about building intresting
          websites. I know HTML, CSS, Javascript, React, Java. In my spare time,
          I make games in Unity and read my favourite fantasy books.
        </p>
      </div>
    </section>
  );
};

export default About;
