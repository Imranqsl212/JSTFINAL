import React from "react";
import styles from "./Team.module.css"; // Import the CSS module

const Team = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>
          <h3>The creative crew</h3>
        </div>
        <div className={styles.content}>
          <h5>who we are</h5>
          <p>
            We are a team of creatively diverse, driven, innovative individuals
            working in various locations from around the world.
          </p>
        </div>
      </header>

      <section data-aos="flip-left" className={styles.main}>
        <div  className={styles.profile}>
          <figure data-value="product owner">
            <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
            <figcaption>bill mahoney</figcaption>
          </figure>
        </div>

        <div className={styles.profile}>
          <figure data-value="art director">
            <img src="https://rvs-team-page.onrender.com/photo2.png" alt="" />
            <figcaption>saba cabrera</figcaption>
          </figure>
        </div>

        <div  className={styles.profile}>
          <figure data-value="tech lead">
            <img src="https://rvs-team-page.onrender.com/photo3.png" alt="" />
            <figcaption>shae le</figcaption>
          </figure>
        </div>

        <div  className={styles.profile}>
          <figure data-value="ux designer">
            <img src="https://rvs-team-page.onrender.com/photo4.png" alt="" />
            <figcaption>skylah lu</figcaption>
          </figure>
        </div>

        <div className={styles.profile}>
          <figure data-value="developer">
            <img src="https://rvs-team-page.onrender.com/photo5.png" alt="" />
            <figcaption>griff richards</figcaption>
          </figure>
        </div>

        <div  className={styles.profile}>
          <figure data-value="developer">
            <img src="https://rvs-team-page.onrender.com/photo6.png" alt="" />
            <figcaption>stan john</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Team;
