import React, { useState, useEffect } from "react";
import HotelComponent from "../../Components/HotelsComponents/HotelComponent";
import axios from "axios";

const Hotels = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const url = "https://651ed40844a3a8aa476913dc.mockapi.io/api/Hotels";
      const res = await axios.get(url);
      console.log(1);
      setData(res.data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <section>
      <HotelComponent data={data} />
    </section>
  );
};

export default Hotels;
