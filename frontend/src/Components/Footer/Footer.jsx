import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const data = ["Home", "About", "Hotels", "Login"];
  return (
    <footer className={styles.footerContainer}>
      <span>Copyright &copy; 2021 Travelo. All rights reserved</span>
      <ul className={styles.socialLinks}>
        {data.map((i) => (
          <li key={i}>
            {i === "Home" ? (
              <Link to="/">Home</Link>
            ) : (
              <Link to={`/${i.toLowerCase()}`}>{i}</Link>
            )}
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
