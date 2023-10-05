import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import axios from "axios";
import Recommend from "../../Components/Recomend/Rec";
import Slider from "../../Components/Slider/Slider";

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

  const slides = [
    "https://wallpapercave.com/wp/wp2759936.jpg",
    "https://wallpapercave.com/wp/LdTAvbA.jpg",
    "https://defenders.org/sites/default/files/styles/meta_image/public/2023-07/2017.03.22%20-%20Expansive%20Forest%20-%20Nantahala%20National%20Forest%20-%20Blue%20Ridge%20Mountains%20-%20North%20Carolina%20-%20Bill%20Lea.jpg?itok=HiDuRqNl",
    "https://w.forfun.com/fetch/62/624e27fde335d49e2dd3c6b75c6027a3.jpeg"
  ];
  return (
    <>
      <Hero />
      <Services data={serviceData} />
      <Recommend value={value} setValue={setValue} data={recCards} />
      <Slider slides={slides} />
    </>
  );
};

export default Home;
