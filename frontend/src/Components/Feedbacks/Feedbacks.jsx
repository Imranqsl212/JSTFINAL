import React, { useState } from "react";
import styles from "./Feedbacks.module.css"; // Import the CSS module

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Feedbacks = ({ d }) => {
  const [index, setIndex] = useState(0);

  if (d.length === 0) {
    return (
      <>
        <br />
        <br />
        <h2 className={styles.h2} data-aos="fade-left">
          What Our Clients Say
        </h2>
        <hr style={{ opacity: "0.8" }} />
        <br />
        <h4 style={{ fontSize: "50px", textAlign: "center" }}>
          At The Moment We Haven't Any Feedbacks
        </h4>
        <br />
        <br />
      </>
    );
  }

  const currentItem = d[index] || {};
  const { name, email, message } = currentItem;

  const checkNumber = (number) => {
    if (number > d.length - 1) {
      return 0;
    } else if (number < 0) {
      return d.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * d.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <section className={styles.sect}>
      <h2 className={styles.h2} data-aos="fade-left">
        What Our Clients Say
      </h2>
      <hr style={{ opacity: "0.8" }} />
      <br />

      <article data-aos="fade-right" className={styles.review}>
        <div className={styles["img-container"]}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
            alt={name}
            className={styles["person-img"]}
          />{" "}
          <span className={styles["quote-icon"]}>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className={styles.author}>{name}</h4>
        <p className={styles.job}>{email}</p>
        <p className={styles.info}>{message}</p>
        <div className={styles["button-container"]}>
          <button className={styles["prev-btn"]} onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className={styles["next-btn"]} onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className={styles["random-btn"]} onClick={randomPerson}>
          Surprise Me!
        </button>
      </article>
    </section>
  );
};

export default Feedbacks;
