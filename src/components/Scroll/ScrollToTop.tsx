import React, { useState, useEffect, useRef } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import styles from "./ScrollToTop.module.scss";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const windowSize = useRef([window.innerHeight]);
console.log(window.pageYOffset,windowSize.current[0])
  useEffect(() => {
    const handleScroll = () => {
      if (windowSize.current[0] >= 577 && window.pageYOffset > 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowSize.current[0]]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.topBtn}>
      {showScroll && (
        <BsArrowUpCircle
          className={styles.topBtnStyle}
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
