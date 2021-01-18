import React from "react";
import { SearchForm, Movies } from "../../components";

const Home = () => {
  return (
    <section className='section'>
      <SearchForm />
      <Movies />
    </section>
  );
};

export default Home;
