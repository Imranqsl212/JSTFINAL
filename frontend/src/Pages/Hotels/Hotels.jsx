import React, { useState, useEffect } from "react";
import HotelComponents from "../../Components/HotelsComponents/HotelComponent";

const Hotels = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <HotelComponents data={data} />
    </>
  );
};

export default Hotels;
