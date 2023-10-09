import React, { useState } from "react";
import styles from "./Leave.module.css";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";

const LeaveMsg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message,
    };

    try {
      await axios.post(
        "https://651ed40844a3a8aa476913dc.mockapi.io/api/Feedbacks",
        data
      );
      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      console.error("An error occurred while submitting feedback", error);
    }
  };

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
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.username}>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.useremail}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.usermessage}>
                  <textarea
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    spellCheck='true'
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
                  Kyrgyzstan
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
