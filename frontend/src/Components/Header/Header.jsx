import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import classes from "./Header.module.css"; // Import the CSS module
import Modal from "../Modal/Modal";

const Header = () => {
  const [navbarState, setNavbarState] = useState(false);
  const data = [
    { name: 'Home', url: '' },
    { name: 'About', url: 'about' },
    { name: 'Hotels', url: 'hotels' },
    { name: 'Login', url: 'login' },
    { name: 'Leave Message', url: 'feedback' }
];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <div className={classes.brand}>
            <div className={classes.container}>
              <Link to="/">
                <span>Travely</span>
              </Link>
            </div>
            <div className={classes.toggle}>
              {navbarState ? (
                <VscChromeClose onClick={() => setNavbarState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavbarState(true)} />
              )}
            </div>
          </div>

          <ul>
            {data.map((i,j) => (
              <li key={j}>
                <Link to={`/${i.url}`}>{i.name}</Link>
              </li>
            ))}
          </ul>
          <button onClick={openModal} className={classes.btn}>
            Contact us
          </button>
        </nav>
        <div
          className={`${classes.responsive} ${
            navbarState ? classes.active : ""
          } `}
        >
          <ul>
            {data.map((i,j) => (
              <li key={j}>
                <Link
                  onClick={() => {
                    setNavbarState(false);
                  }}
                  to={`/${i.url}`}
                >
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <Modal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        title={"Свяжитесь с нами по этому номеру 😍"}
        content={"+996 550 578 150"}
      />
    </>
  );
};

export default Header;
