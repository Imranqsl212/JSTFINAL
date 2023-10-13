import React from "react";
import styles from "./Favourites.module.css";
import RecCard from "../UI/ReccomendCard/RecCard";
import HotelCard from "../../Components/UI/HotelCard/HotelCard";
import axios from "axios";

const Favourites = ({ hotelData, tourData, setHotelData, setTourData }) => {
  const delHotel = async (id) => {
    await axios.delete(
      `https://6528e3c0931d71583df28a5f.mockapi.io/FavouriteHotels/${id}`
    );
    setHotelData(hotelData.filter((item) => item.id !== id));
  };

  const delTour = async (id) => {
    await axios.delete(
      `https://6528e3c0931d71583df28a5f.mockapi.io/FavouriteTours/${id}`
    );
    setTourData(tourData.filter((item) => item.id !== id));
  };
  return (
    <section className={styles.sect}>
      <br />
      <h1>Your Favourites Items</h1>
      <br /><br />
      <div className={styles.holder}>
        <div className="">
        <h1 className={styles.secret}>Tours</h1>
          {tourData.map((i, j) => {
            return (
              <>
                <RecCard
                  onDelete={() => delTour(i.id)}
                  key={j}
                  showBtn={false}
                  destination={i}
                />
              </>
            );
          })}
        </div>
        <br />
        <hr className={styles.hr} />
        <br />
        <div className="">
        <h1 className={styles.secret}>Hotels</h1>
          {hotelData.map((i, j) => {
            return (
              <>
                <HotelCard
                  onDelete={() => delHotel(i.id)}
                  key={j}
                  showBtn={false}
                  data={i}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favourites;
