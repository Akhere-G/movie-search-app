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
        <SearchForm />
        <MovieList />
      </section>
    </div>
  );
};

export default Home;
