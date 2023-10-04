import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.head}>
            <span>Sign up</span>
            <p>Create a free account with your email.</p>
          </div>
          <div className={styles.inputs}>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button className={styles.button}>Sign up</button>
        </form>
        <div className={styles.formFooter}>
          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
          <br />
        </div>
      </div>
      <br />
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        fugiat. Possimus obcaecati totam ipsum commodi temporibus est,
        perspiciatis quas sunt laudantium excepturi quod veniam illum blanditiis
        nihil illo doloremque asperiores quos nam! Obcaecati exercitationem
        earum ea, corporis necessitatibus molestias illum repellendus esse iste
        tenetur? Praesentium harum exercitationem adipisci, molestiae maxime
        eius, fugiat reiciendis quod inventore sit labore illum dignissimos
        quidem. Libero aspernatur quisquam numquam, mollitia enim fugit ut omnis
        soluta delectus asperiores quae error ea reprehenderit deleniti illum
        qui, accusamus accusantium expedita? Vero aut dignissimos sit minima
        iure dolor. Molestiae?
      </p>
    </div>
  );
};

export default Register;
