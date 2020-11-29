import React from "react";
import { useGlobalState } from "../context";
import Movie from "./Movie";
import styles from "../styles/MovieList.module.css";

const MovieList = () => {
  const { loading, movies } = useGlobalState();

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (movies.length < 1) {
    return <h1>No Movies</h1>;
  }
  return (
    <section className={styles.MovieListContainer}>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie, index) => {
          const { id } = movie;
          console.log(movie.poster_path);
          return <Movie key={id} {...movie} />;
        })}
      </ul>
    </section>
  );
};

export default MovieList;
