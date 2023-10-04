// AboutCompany.js

import React from "react";
import styles from "./AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png"
          alt="About"
        />
      </div>

      <div className={styles.content}>
        <h2>About Us</h2>
        <hr className={styles.verticalLine} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          aspernatur voluptas inventore ab voluptates nostrum minus illo laborum
          harum laudantium earum ut, temporibus fugiat sequi explicabo facilis
          unde quos corporis!
        </p>
        <ul className={styles.links}>
          <li>
            <a href="#">work</a>
          </li>
          <br />
          <li>
            <a href="#">service</a>
          </li>
          <br />
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
        <ul className={styles.icons}>
          <li>
            <i className="fa fa-twitter"></i>
          </li>
          <li>
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            <i className="fa fa-github"></i>
          </li>
          <li>
            <i className="fa fa-pinterest"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutCompany;
