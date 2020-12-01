import React from "react";
import styles from "../styles/SearchForm.module.css";
import { useGlobalState } from "../context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalState();
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    const { value } = e.target;
    setSearchTerm(value);
  };
  return (
    <section className={styles.searchForm}>
      <form className={styles.center} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor='SearchInput'>
          Search
        </label>
        <input
          type='text'
          id='SearchInput'
          className={styles.searchBar}
          placeholder='Search films'
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default SearchForm;
