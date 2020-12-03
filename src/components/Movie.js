import React, { useState } from "react";
import styles from "../styles/Movie.module.css";
import notFoundSrc from "../images/ImageNotFound.png";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Movie = ({ id, title, popularity, poster_path, release_date }) => {
  const [loadClass, setLoadClass] = useState("loading");

  return (
    <article className={styles.movie}>
      <div className={styles.imgContainer}>
        <LazyLoad debounce={false} offsetVertical={100}>
          <img
            className={`${styles[loadClass]}`}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : notFoundSrc
            }
            alt={title}
            onLoad={() => {
              setLoadClass("loaded");
            }}
          />
        </LazyLoad>
      </div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <h4>{title}</h4>
          <p>release: {release_date}</p>
          <p>score: {popularity}%</p>
        </div>
        <div className={styles.btnContainer}>
          <Link className='btn' to={`/movie/${id}`}>
            details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Movie;
