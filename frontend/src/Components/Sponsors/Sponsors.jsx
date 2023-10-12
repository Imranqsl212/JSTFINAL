import React from "react";
import styles from "./Sponsors.module.css";
import sponsor1 from '../../Assets/sponsor1.png'
import sponsor2 from '../../Assets/coca-cola-logo-svgrepo-com.svg'
import sponsor3 from '../../Assets/logo.webp'

const Sponsors = () => {
  return (
    <section data-aos="fade-left" className={styles.section}>
      <h2 className={styles.h2}>Our Sponsors</h2>
      <br />
      <div className={styles.holder}>
        <img src={sponsor1} alt="Qatar Airways" />
        <img src={sponsor2} alt="Coca Cola" />
        <img src={sponsor3} alt="Codify" />
      </div>
    </section>
  );
};

export default Sponsors;
