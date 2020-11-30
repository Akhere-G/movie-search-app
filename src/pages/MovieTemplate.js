import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/MovieTemplate.module.css";

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
        tagline,
        poster_path,
        runtime,
      } = data;
      setMovieInfo({
        backdrop_path,
        genres: genres.map(genre => genre.name),
        overview,
        title,
        tagline,
        poster_path,
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
      console.log(heroRef.current.style);
      console.log(movieInfo.backdrop_path);
      heroRef.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movieInfo.poster_path})`;
    }
  }, [loading, movieInfo]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!movieInfo) {
    return <h2>no movie found</h2>;
  }

  const {
    backdrop_path,
    genres,
    overview,
    title,
    tagline,
    poster_path,
    runtime,
  } = movieInfo;

  return (
    <section className={styles.movieTemplate}>
      <div className={styles.hero} ref={heroRef}>
        <h1>{title}</h1>
        <p>{overview}</p>
        <h4>{tagline}</h4>
        <h4>runtime: {runtime}</h4>
        <h4>genres: {genres.join(", ")}</h4>
      </div>
    </section>
  );
};

export default MovieTemplate;
