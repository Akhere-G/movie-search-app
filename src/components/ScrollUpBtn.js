import React, { useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import styles from "../styles/ScrollUpBtn.module.css";

const ScrollUpBtn = () => {
  const [showScroll, setShowScroll] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  let display = "";

  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
    console.log("here", display);
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${styles.scrollUpBtn} ${showScroll && styles.show}`}
      onClick={scrollTop}
    >
      <ArrowUpwardIcon />
    </div>
  );
};

export default ScrollUpBtn;
