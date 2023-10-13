import React, { useEffect, useState } from "react";
import Favourites from "../../Components/Favourites/Favourites";
import axios from "axios";

const FavPage = () => {
  const [hotelData, setHotelData] = useState([]);
  const [tourData, setTourData] = useState([]);

  const fetchHotel = async () => {
    const res = await axios.get(
      "https://6528e3c0931d71583df28a5f.mockapi.io/FavouriteHotels"
    );
    setHotelData(res.data);
  };

  const fetchTours = async () => {
    const res = await axios.get(
      "https://6528e3c0931d71583df28a5f.mockapi.io/FavouriteTours"
    );
    setTourData(res.data);
  };

  useEffect(() => {
    fetchHotel();
    fetchTours();
  }, []);

  if (hotelData.length === 0 && tourData.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          You Have'nt added any Tours or Hotels to your favourite
        </h1>
      </div>
    );
  }

  return (
    <>
      <Favourites setHotelData={setHotelData} setTourData={setTourData} hotelData={hotelData} tourData={tourData} />
    </>
  );
};

export default FavPage;
