import React from "react";
import { useGlobalState } from "../context";
import Movie from "./Movie";
import styles from "../styles/MovieList.module.css";

const MovieList = () => {
  const { loading, movies } = useGlobalState();

  if (loading) {
    return <h1 className={styles.container}>Loading...</h1>;
  }
  if (movies.length < 1) {
    return <h1 className={styles.container}>No Movies with that Title</h1>;
  }
  return (
    <section className={styles.container}>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie, index) => {
          return <Movie key={index} {...movie} />;
        })}
      </ul>
    </section>
  );
};

export default MovieList;
