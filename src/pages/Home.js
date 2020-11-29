import React from "react";
import styles from "../styles/Home.module.css";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div>
      <section className='section'>
        <SearchForm />
        <MovieList />
      </section>
    </div>
  );
};

export default Home;
