import React from "react";
import styles from "../styles/Home.module.css";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div>
      {/*TODO: make section of calss
        home and add justify contetn display
        flex stuff so when there areno movies ,
        the search bar doesn't drop
       */}
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
    </div>
  );
};

export default Home;
