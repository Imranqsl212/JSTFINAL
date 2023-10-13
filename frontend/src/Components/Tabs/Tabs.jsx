import  { useState } from "react";
import styles from "./Tabs.module.css";
import { FaGlobe } from "react-icons/fa";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabHeaders = [
    { icon: <FaGlobe />, text: "Destinations" },
    { icon: <FaGlobe />, text: "Our Story" },
    { icon: <FaGlobe />, text: "Services" },
    { icon: <FaGlobe />, text: "Contact Us" },
  ];

  const tabContentData = [
    {
      title: "Destinations",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    },
    {
      title: "Our Story",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    },
    {
      title: "Services",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    },
    {
      title: "Contact Us",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section data-aos="fade-right" className={styles.some}>
      <h2 style={{ fontSize: "55px", marginTop: "10px", textAlign: "center" }}>
        Mini Trip About Us
      </h2>
      <br />
      <div className={styles.tabs}>
        <div className={styles["tab-header"]}>
          {tabHeaders.map((header, index) => (
            <div
              key={index}
              className={activeTab === index ? styles.active : ""}
              onClick={() => handleTabClick(index)}
            >
              {header.icon} {header.text}
            </div>
          ))}
        </div>
        <div
          className={styles["tab-indicator"]}
          style={{ top: `calc(80px + ${activeTab * 50}px)` }}
        ></div>
        <div className={styles["tab-content"]}>
          {tabContentData.map((tab, index) => (
            <div
              key={index}
              className={activeTab === index ? styles.active : ""}
            >
              {tabHeaders[index].icon}
              <h2 className={styles.h2}>{tab.title}</h2>
              <p className={styles.p}>{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tabs;
