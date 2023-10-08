import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import data from "../navigation";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <span>Copyright &copy; 2021 Travelo. All rights reserved</span>
      <ul className={styles.socialLinks}>
        {data.map((i, j) => (
          <li key={j}>
            <Link to={`/${i.url}`}>{i.name}</Link>
          </li>
        ))}
      </ul>
      <ul className={styles.socialLinks}>
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </footer>
  );
}
