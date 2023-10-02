import React from "react";
import homeImage from "../../Assets/hero.png";
import styles from "./Hero.module.css"; 


export default function Hero() {
  return (
    <section className={styles["hero-section"]} id="hero">
      <div className={styles.background}>
        <img src={homeImage} alt="" />
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
