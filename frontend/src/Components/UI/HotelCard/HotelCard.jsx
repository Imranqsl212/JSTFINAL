import React from 'react';
import styles from './HotelCard.module.css'; 

const HotelCard = ({ data,show }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{data.title}</h1>
      <br />
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      ></div>
      <div className={styles.details}>
        <h1>
          <em>{data.name}</em>
        </h1>
        <h2>{data.somename}</h2>
        <p>{data.duration}</p>
      </div>
      <h1>${data.price}</h1>
    </div>
  );
};

export default HotelCard;
