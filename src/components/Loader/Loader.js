import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <h1>Loading...</h1>
      <div className='loader'></div>
    </div>
  );
};

export default Loader;
