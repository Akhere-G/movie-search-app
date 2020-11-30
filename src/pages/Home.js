import React from "react";
import styles from "../styles/Home.module.css";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <section className='section'>
      <article className={styles.home}>
        <div className={styles.SearchForm}>
          <SearchForm />
        </div>

        <div className={styles.MovieList}>
          <MovieList />
        </div>
      </article>
    </section>
  );
};

export default Home;
