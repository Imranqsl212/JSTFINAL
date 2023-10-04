import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Team from "../../Components/Team/Team";
import AboutCompany from "../../Components/AboutCompany/AboutCompany";

import Accordions from "../../Components/AcoordionsLists/Accordions";

const About = () => {
  return (
    <>
      <AboutMe />
      <AboutCompany />
      <Team />
      <Accordions/>
    </>
  );
};

export default About;
