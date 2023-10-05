import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://www.uwa.edu.au/news/-/media/Project/UWA/UWA/Newsroom/Card-image/2023/value-of-nature-Card.jpg",
    "https://i.pinimg.com/originals/bb/b9/ad/bbb9ad655fcc13d22525d3e68f6975d7.jpg",
    "https://wallpaperaccess.com/full/284466.jpg",
    "https://wallpapercave.com/wp/JYodMo6.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section data-aos="fade-right" className={styles["hero-section"]} id="hero">
      <div className={styles.background}>
        <img src={images[imageIndex]} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
            tenetur!
          </p>
        </div>
        <div className={styles.search}>
          <div className={styles.container}>
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className={styles.container}>
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className={styles.container}>
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <button className={styles.btn}>Explore Now</button>
        </div>
      </div>
    </section>
  );
}
