import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import axios from "axios";
import Recommend from "../../Components/Recomend/Rec";
import Slider from "../../Components/Slider/Slider";
import Feedbacks from "../../Components/Feedbacks/Feedbacks";
import Loader from "../../Components/Loader/Loader";
import Tabs from "../../Components/Tabs/Tabs";
import Sponsors from "../../Components/Sponsors/Sponsors";
import slide1 from "../../Assets/Slider/wp2759936.jpg";
import slide2 from "../../Assets/Slider/LdTAvbA.jpg";
import slide3 from "../../Assets/Slider/third.jpg";
import slide4 from "../../Assets/Slider/624e27fde335d49e2dd3c6b75c6027a3.jpeg";

const Home = () => {
  const [serviceData, setServiceData] = useState([]);
  const [recCards, setRecCards] = useState([]);
  const [value, setValue] = useState(0);
  const [feedbackCards, setFeedbackCards] = useState([]);
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
  const fetchFeedbackCards = async () => {
    const res = await axios.get(
      "https://651ed40844a3a8aa476913dc.mockapi.io/api/Feedbacks"
    );
    console.log(res.data);
    setFeedbackCards(res.data);
  };
  useEffect(() => {
    fetchService();
    fetchRecCards();
    fetchFeedbackCards();
  }, []);
  useEffect(() => {
    fetchRecCards();
  }, [value]);

  if (!recCards || recCards.length === 0) {
    return <Loader />;
  }

  // const filteredRecCards = value === 0 ? recCards : recCards.filter((card) => card.category === value);
  // <Recommend value={value} setValue={setValue} data={filteredRecCards} /> Much Faster but i need another way

  const slides = [slide1, slide2, slide3, slide4];
  return (
    <>
      <Hero />
      <Services data={serviceData} />
      <Recommend value={value} setValue={setValue} data={recCards} />
      <Slider slides={slides} />
      <Sponsors />
      <Tabs />
      <Feedbacks d={feedbackCards} />
    </>
  );
};

export default Home;
