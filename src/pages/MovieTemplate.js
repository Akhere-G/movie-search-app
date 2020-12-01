import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/MovieTemplate.module.css";
import notFoundSrc from "../images/ImageNotFound.png";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieTemplate = () => {
  const heroRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState(null);

  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  const fetchMovie = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const {
        backdrop_path,
        genres,
        overview,
        title,
        poster_path,
        popularity,
        release_date,
        runtime,
      } = data;
      setMovieInfo({
        backdrop_path,
        genres: genres.map(genre => genre.name),
        overview,
        title,
        poster_path,
        popularity,
        release_date,
        runtime,
      });
    } catch (error) {
      setMovieInfo(null);
      console.log(error);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchMovie();
  }, [id, fetchMovie]);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), rgba(30, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})`;
    }
  }, [loading, movieInfo]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!movieInfo) {
    return <h2>no movie found</h2>;
  }

  const {
    genres,
    overview,
    title,
    poster_path,
    popularity,
    release_date,
    runtime,
  } = movieInfo;

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.imgContainer}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : notFoundSrc
          }
          alt=''
        />
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
