import React, { useEffect } from "react";
import styles from "../styles/Pagination.module.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
const Pagination = ({
  searchPage,
  setSearchPage,
  searchPageMax,
  itemsPerPage,
  scrollBackUp,
}) => {
  const pageMax = Math.round(searchPageMax / itemsPerPage);

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
  }, []);
  return (
    <div className={styles.pagination}>
      <div className={styles.container}>
        <span
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
          <ChevronLeftIcon />
        </span>
        {searchPage > 2 && (
          <span
            className={styles.page}
            onClick={() => {
              setSearchPage(1);
              scrollTop();
            }}
          >
            1
          </span>
        )}
        {searchPage > 2 && (
          <span className={`${styles.page} ${styles.pageNoClick}`}>...</span>
        )}
        {searchPage > 1 && (
          <span
            className={styles.page}
            onClick={() => {
              setSearchPage(prev => prev - 1);
              scrollTop();
            }}
          >
            {searchPage - 1}
          </span>
        )}
        <span className={`${styles.page} ${styles.pageActive}`}>
          {searchPage}
        </span>
        {searchPage < pageMax && (
          <span
            className={styles.page}
            onClick={() => {
              setSearchPage(prev => prev + 1);
              scrollTop();
            }}
          >
            {searchPage + 1}
          </span>
        )}
        {searchPage < pageMax - 1 && (
          <span className={`${styles.page} ${styles.pageNoClick}`}>...</span>
        )}
        {searchPage < pageMax - 1 && (
          <span
            className={styles.page}
            onClick={() => {
              setSearchPage(pageMax);
              scrollTop();
            }}
          >
            {pageMax}
          </span>
        )}
        <span
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
          <ChevronRightIcon />
        </span>
      </div>
    </div>
  );
};

export default Pagination;