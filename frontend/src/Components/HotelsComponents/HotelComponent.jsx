import React from "react";
import styles from "./HotelComponent.module.css";

const HotelComponent = ({ data }) => {
  return (
    <div className={styles.main}>
      {data.map((i, j) => (
        <div className={styles.wrapper}>
          <h1>{i.title}</h1>
          <br />
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${i.img})`,
            }}
          ></div>
          <div className={styles.details}>
            <h1>
              <em>{i.name}</em>
            </h1>
            <h2>{i.somename}</h2>
            <p>{i.duration}</p>
          </div>
          <h1>{i.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default HotelComponent;
