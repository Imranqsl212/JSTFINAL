import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import axios from "axios";
import Recommend from "../../Components/Recomend/Rec";

const Home = () => {
  const [serviceData, setServiceData] = useState([]);
  const [recCards, setRecCards] = useState([]);
  const [value, setValue] = useState(0);
  const fetchService = async () => {
    const res = await axios.get(
      "https://651563a1dc3282a6a3ce5043.mockapi.io/Services"
    );
    setServiceData(res.data);
  };
  const fetchRecCards = async () => {
    let url = "https://651563a1dc3282a6a3ce5043.mockapi.io/cards";
    let prefix = value === 0 ? "" : `?category=${value}`;

    const res = await axios.get(url + prefix);
    setRecCards(res.data);
  };
  useEffect(() => {
    fetchService();
    fetchRecCards();
  }, []);
  useEffect(() => {
    fetchRecCards();
  }, [value]);

  // const filteredRecCards = value === 0 ? recCards : recCards.filter((card) => card.category === value);
  // <Recommend value={value} setValue={setValue} data={filteredRecCards} /> Much Faster but i need another way

  return (
    <>
      <Hero />
      <Services data={serviceData} />
      <Recommend value={value} setValue={setValue} data={recCards} />
    </>
  );
};

export default Home;
