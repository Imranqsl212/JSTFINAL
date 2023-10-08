import React from "react";
import styles from "./Leace.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const LeaveMsg = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <img
            alt="dw"
            src="https://images.unsplash.com/photo-1659706994835-fb804722b0f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
        <div className={styles.right}>
          <h2>Leave Message</h2>
          <div className={styles.contact}>
            <div className={styles["form-container"]}>
              <form className={styles.form}>
                <div className={styles.username}>
                  <input type="text" placeholder="Enter your Name" />
                </div>
                <div className={styles.useremail}>
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <div className={styles.usermessage}>
                  <textarea
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <div className={styles.usersubmit}>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
            <div className={styles.address}>
              <div className={styles.email}>
                <h4>Contact</h4>
                <p>zakirovimran333@gmail.com</p>
              </div>
              <div className={styles.location}>
                <h4>Based in</h4>
                <p>
                  Bishkek,
                  <br />
                  Kyrgyzsstam
                </p>
              </div>
              <div className={styles.social}>
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveMsg;
