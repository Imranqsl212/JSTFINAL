import React, { useState, useEffect } from "react";
import styles from "./ToTop.module.css"; // Import the CSS module

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setScrollState(true) : setScrollState(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.toTop}
      style={{ display: scrollState ? "block" : "none" }}
      onClick={toTop}
    >
      <h1>↑</h1>
    </div>
  );
}
