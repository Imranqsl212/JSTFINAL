import React, { useState } from "react";
import styles from "./HotelComponent.module.css";

const HotelComponent = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(3);
  const visible = data.slice(0, visibleItems);

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };
  const handleWrap = () => {
    setVisibleItems(3);
  };

  return (
    <div className={styles.some}>
      <div className={styles.main}>
        {visible.map((i, j) => (
          <div className={styles.wrapper} key={j}>
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
            <h1>${i.price}</h1>
          </div>
        ))}
      </div>
      {visibleItems < data.length ? (
        <button className={styles.btn} onClick={handleSeeMore}>
          See More
        </button>
      ) : (
        <button onClick={handleWrap} className={styles.btn}>
          Wrap All
        </button>
      )}
    </div>
  );
};

export default HotelComponent;
