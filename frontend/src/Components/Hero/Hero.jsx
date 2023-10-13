import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import photo1 from "../../Assets/Hero/284466.jpg";
import photo2 from "../../Assets/Hero/bbb9ad655fcc13d22525d3e68f6975d7.jpg";
import photo3 from "../../Assets/Hero/JYodMo6.jpg";
import photo4 from "../../Assets/Hero/so.jpg";

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    photo1,
    photo2,
    photo3,
    photo4,
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
