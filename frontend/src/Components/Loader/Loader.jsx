import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles["loader-container"]}>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
    </div>
  );
};

export default Loader;
