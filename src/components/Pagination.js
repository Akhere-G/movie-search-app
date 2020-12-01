import React, { useEffect, useState } from "react";
import { useGlobalState } from "../context";
import styles from "../styles/Pagination.module.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
const Pagination = ({
  searchPage,
  setSearchPage,
  searchPageMax,
  itemsPerPage,
}) => {
  const pageMax = Math.round(searchPageMax / itemsPerPage);
  useEffect(() => {
    setSearchPage(1);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        {searchPage !== 1 && (
          <span
            className={styles.page}
            onClick={() => {
              setSearchPage(prev => Math.max(prev - 1, 0));
            }}
          >
            <ChevronLeftIcon />
          </span>
        )}
        {searchPage > 2 && (
          <span
            className={styles.page}
            onClick={() => {
              setSearchPage(1);
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
            }}
          >
            {pageMax}
          </span>
        )}
        {searchPage !== pageMax && (
          <span
            className={styles.page}
            onClick={() => {
              setSearchPage(prev => Math.min(prev + 1, pageMax));
            }}
          >
            <ChevronRightIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
