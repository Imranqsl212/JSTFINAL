import React, { useState, useEffect } from "react";
import HotelComponent from "../../Components/HotelsComponents/HotelComponent";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import FilterHotels from "../../Components/FilterHotels/FilterHotels";

const Hotels = () => {
  const [data, setData] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("");
  console.log(sortingOrder);
  const fetchData = async () => {
    try {
      const pre = sortingOrder === "" ? "" : `?sortBy=price&order=${sortingOrder}`;
      const url = `https://651ed40844a3a8aa476913dc.mockapi.io/api/Hotels${pre}`;
      console.log(url);
      const res = await axios.get(url);

      setData(res.data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [sortingOrder]);
  if (!data || data.length === 0) {
    return <Loader />;
  }
  return (
    <section>
      <FilterHotels
        sortingOrder={sortingOrder}
        setSortingOrder={setSortingOrder}
      />
      <HotelComponent data={data} />
    </section>
  );
};

export default Hotels;
