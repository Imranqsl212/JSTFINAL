import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import classes from "./Header.module.css"; // Import the CSS module

const Header = () => {
  const [navbarState, setNavbarState] = useState(false);
  const data = ["Home", "About", "Hotels", "Login"];

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <div className={classes.container}>
            <Link to='/'>
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
        <button className={classes.btn}>Contact us</button>
      </nav>
      <div
        className={`${classes.responsive} ${
          navbarState ? classes.active : ""
        } `}
      >
        <ul>
          {data.map((i) => (
            <li key={i}>
              {i === "Home" ? (
                <Link
                  onClick={() => {
                    setNavbarState(false);
                  }}
                  to="/"
                >
                  Home
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    setNavbarState(false);
                  }}
                  to={`/${i.toLowerCase()}`}
                >
                  {i}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
