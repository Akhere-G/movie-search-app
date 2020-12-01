import React from "react";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <section className='section'>
      <SearchForm />
      <MovieList />
    </section>
  );
};

export default Home;
