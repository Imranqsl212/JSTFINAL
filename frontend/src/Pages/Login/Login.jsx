import React from "react";
import styles from "./Login.module.css";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className={styles.app}>
      <div className={styles.form}>
        <div className={styles.title}>Welcome Back</div>
        <div className={styles.subtitle}>Let's login to your account!</div>
        <small className={styles.subtitle} >Don't Have Account?<Link className={styles.hhh} to='/register' > Register</Link></small>

        <div className={`${styles["input-container"]} ${styles.ic2}`}>
          <input
            placeholder=""
            type="text"
            className={styles.input}
            id="lastname"
          />
          <div className={styles.cut}></div>
          <label className={styles.iLabel} htmlFor="lastname">
            Last name
          </label>
        </div>
        <div className={`${styles["input-container"]} ${styles.ic2}`}>
          <input
            placeholder=""
            type="text"
            className={styles.input}
            id="email"
          />
          <div className={`${styles.cut} ${styles["cut-short"]}`}></div>
          <label className={styles.iLabel} htmlFor="email">
            Email
          </label>
        </div>
        <button className={styles.submit} type="text">
          submit
        </button>
      </div>
      <br /><br /><br />
      <p className={styles.p}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
        recusandae neque cum enim debitis, accusamus est quo nulla. Et porro
        amet possimus aut? Maiores quas eligendi sed amet. Vero eius voluptas
        porro sapiente nostrum architecto, explicabo mollitia corporis quos,
        recusandae accusamus ea accusantium aperiam quisquam placeat sint hic
        sed? Porro ipsam quae, repellendus quibusdam est facilis animi maxime
        sapiente officiis?
      </p>
    </div>
  );
};

export default Login;
