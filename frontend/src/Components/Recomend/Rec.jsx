import React from "react";

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
            <img src={destination.image} alt="" />
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
