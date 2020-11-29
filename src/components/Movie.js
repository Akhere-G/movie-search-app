import React from "react";
import styles from "../styles/Movie.module.css";
import notFoundSrc from "../images/ImageNotFound.png";
import { Link } from "react-router-dom";

const Movie = ({ id, title, popularity, poster_path, release_date }) => {
  return (
    <article className={styles.movie}>
      <div className={styles.movieImgContainer}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w185${poster_path}`
              : notFoundSrc
          }
          alt={title}
        />
      </div>
      <div className={styles.movieFooter}>
        <div className={styles.movieInfo}>
          <h4>{title}</h4>
          <p>release: {release_date}</p>
          <p>score: {popularity}%</p>
        </div>
        <div className={styles.movieBtnContainer}>
          <span className='btn'>
            <Link to={`/movie/${id}`}>details</Link>
          </span>
        </div>
      </div>
    </article>
  );
};

export default Movie;
