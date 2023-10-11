import { useState } from "react";

import info1 from "../../Assets/info1.png";
import info2 from "../../Assets/info2.png";
import info3 from "../../Assets/info3.png";
import styles from "./Rec.module.css"; // Import the CSS module

export default function Recommend({ data, value, setValue }) {
  const packages = ["All", "Asia", "Europe", "USA"];


  return (
    <section id="recommend" className={styles.section}>
      <div className={styles.title}>
        <h2>Recommended Destinations</h2>
      </div>
      <div className={styles.packages}>
        <ul>
          {packages.map((pkg, index) => (
            <li
              className={value === index ? styles.active : ""}
              onClick={() => setValue(index)}
              key={index}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.destinations}>
        {data.map((destination, index) => (
          <div
            data-aos="fade-up-right"
            className={styles.destination}
            key={index}
          >
            <img className={styles.img1} src={destination.image} alt="" />
            <h3>{destination.title}</h3>
            <p>{destination.subTitle}</p>
            <div className={styles.info}>
              <div className={styles.services}>
                <img src={info1} alt="" />
                <img src={info2} alt="" />
                <img src={info3} alt="" />
              </div>
              <h4>{destination.cost}$</h4>
            </div>
            <div className={styles.distance}>
              <span>{destination.duration} days</span>
              <button className={styles.CartBtn}>
                <span className={styles.IconContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="rgb(17, 17, 17)"
                    class="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <p className={styles.text}>Add to Favourites</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
