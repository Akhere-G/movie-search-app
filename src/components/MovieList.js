import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context";
import Movie from "./Movie";
import styles from "../styles/MovieList.module.css";
import Pagination from "../components/Pagination";
const MovieList = () => {
  const {
    loading,
    movies: allMovies,
    searchPage,
    setSearchPage,
    searchPageMax,
    setSearchPageMax,
  } = useGlobalState();
  const moviesPerPage = 5;
  const startOfPage = moviesPerPage * (searchPage - 1);
  const endOfPage = moviesPerPage * searchPage;

  const [movies, setMovies] = useState(
    [...allMovies].slice(startOfPage, endOfPage)
  );
  useEffect(() => {
    setMovies([...allMovies].slice(startOfPage, endOfPage));
  }, [searchPage, searchPageMax, allMovies]);

  const paginationProps = {
    searchPage,
    setSearchPage,
    searchPageMax,
    itemsPerPage: moviesPerPage,
  };

  if (loading) {
    return <h1 className={styles.container}>Loading...</h1>;
  }
  if (movies.length < 1) {
    return <h1 className={styles.container}>No Movies with that Title</h1>;
  }

  return (
    <section className={styles.container}>
      <h1>Movies</h1>
      <Pagination {...paginationProps} />

      <ul>
        {movies.map((movie, index) => {
          return <Movie key={index} {...movie} />;
        })}
      </ul>
      <Pagination {...paginationProps} scrollBackUp={true} />
    </section>
  );
};

export default MovieList;
