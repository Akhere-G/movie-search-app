import React, { useEffect } from "react";
import styles from "../styles/Pagination.module.css";
const Pagination = ({
  searchPage,
  setSearchPage,
  searchPageMax, //number of items
  itemsPerPage,
  scrollBackUp,
}) => {
  const pageMax = Math.ceil(searchPageMax / itemsPerPage);
  let scrollTop = () => {};
  if (scrollBackUp) {
    scrollTop = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 10);
    };
  }
  useEffect(() => {
    setSearchPage(1);
  }, [setSearchPage]);
  const pages = [];
  for (let i = 1; i <= pageMax; i++) {
    const page = (
      <button
        key={i}
        className={`${styles.page} ${searchPage === i && styles.pageActive}`}
        onClick={() => {
          setSearchPage(i);
          scrollTop();
        }}
      >
        {i}
      </button>
    );
    pages.push(page);
  }
  return (
    <div className={styles.pagination}>
      <div className={styles.container}>
        <button
          className={`${styles.page} ${
            searchPage < 2 && styles.pageUnClickable
          }`}
          onClick={() => {
            if (searchPage > 1) {
              setSearchPage(prev => prev - 1);
              scrollTop();
            }
          }}
        >
          {"<"}
        </button>
        {pages}
        <button
          className={`${styles.page} ${
            searchPage > pageMax - 1 && styles.pageUnClickable
          }`}
          onClick={() => {
            if (searchPage < pageMax) {
              setSearchPage(prev => prev + 1);
              scrollTop();
            }
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
