import React from "react";
import styles from "./HotelCard.module.css";
import axios from "axios";

const HotelCard = ({ data, showBtn, onDelete }) => {
  const addToFavorites = async (target) => {
    try {
      const apiUrl =
        "https://6528e3c0931d71583df28a5f.mockapi.io/FavouriteHotels";
      const response = await axios.post(apiUrl, target);
      console.log("Successfully added to favorites", response.data);
    } catch (error) {
      console.error("Error adding to favorites", error);
    }
  };

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
      <br />
      {showBtn ? (
        <button onClick={() => addToFavorites(data)} className={styles.CartBtn}>
          <span className={styles.IconContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="rgb(17, 17, 17)"
              className="cart"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
            </svg>
          </span>
          <p className={styles.text}>Add to Favorites</p>
        </button>
      ) : (
        <button onClick={()=>{onDelete()}} className={styles.noselect}>
          <span className={styles.text}>Delete</span>
          <span className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};

export default HotelCard;
