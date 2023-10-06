import React from "react";
import styles from "./AboutMe.module.css"; // Import the CSS module
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
import trump from '../../Assets/trump.jpg'

function About() {
  const expertiseData = [
    { icon: <FaHtml5 />, text: "HTML" },
    { icon: <FaCss3Alt />, text: "CSS" },
    { icon: <FaNodeJs />, text: "JavaScript" },
    { icon: <FaReact />, text: "React Js" },
    { icon: <FaPython />, text: "Python" },
  ];
  const MyData = [
    { icon: <FaPaperPlane />, label: "Address", text: "Bishkek, Kyrgyzstan" },
    { icon: <FaPhoneAlt />, label: "Phone No", text: "+996 550 578 150" },
    {
      icon: <FaEnvelope />,
      label: "Email",
      text: "zakirovimran333@gmail.com",
    },
  ];
  return (
    <section id="about-section" className={styles.aboutSection}>
      <div className={styles.aboutLeft}>
        <img
          src={trump}
          alt="About"
        />
      </div>
      <div className={styles.aboutRight}>
        <h4>My Story</h4>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          fugiat a dolorem at similique maxime dolorum dolore enim dicta
          voluptatibus, illum recusandae, vel optio tempore ipsum incidunt eum.
          Aspernatur, repellendus.
        </p>
        <div className={styles.address}>
          <ul>
            {MyData.map((item, index) => (
              <li key={index}>
                <span className={styles.addressLogo}>{item.icon}</span>
                <p>{item.label}</p>
                <span className={styles.saprater}>:</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.expertise}>
          <h3>My Expertise</h3>
          <ul>
            {expertiseData.map((item, index) => (
              <li key={index}>
                <span className={styles.expertiseLogo}>{item.icon}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
