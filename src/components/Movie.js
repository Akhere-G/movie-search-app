import React from "react";
import styles from "../styles/Movie.module.css";

const Movie = ({ id, title, popularity, poster_path, release_date }) => {
  return (
    <article className={styles.movie}>
      <div className={styles.movieImgContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w185${poster_path}`}
          alt={title}
        />
      </div>
      <div className={styles.movieFooter}>
        <div>
          <h4>{title}</h4>
          <p>release: {release_date}</p>
          <p>score: {popularity}%</p>
        </div>
        <div className={styles.movieBtnContainer}>
          <button>Details</button>
        </div>
      </div>
    </article>
  );
};

export default Movie;
