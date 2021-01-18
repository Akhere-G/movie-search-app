import React from "react";
import { Link } from "react-router-dom";

import styles from "./MovieTemplate.module.css";

const MovieTemplate = ({
  genres,
  overview,
  title,
  src,
  popularity,
  release_date,
  runtime,
  heroRef,
}) => {
  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.imgContainer}>
        <img src={src} alt='' />
      </div>
      <div className={styles.center}>
        <h1>{title}</h1>
        <p>{overview}</p>
        <div className={styles.footer}>
          <p>Runtime: {runtime}</p>
          <p>Genres: {genres.join(", ")}</p>
          <p>Release Date: {release_date}</p>
          <p>Popularity: {popularity}</p>
          <div className={styles.footerBtnContainer}>
            <Link className='btn' to='/'>
              Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieTemplate;
