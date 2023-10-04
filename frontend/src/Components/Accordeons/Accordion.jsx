import React, { useState, useRef } from "react";
import styles from "./Accrodion.module.css"; 

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? styles["active"] : ""); 
    setHeightState(
      setActive === styles["active"]
        ? "0px"
        : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={styles["accordion__section"]}> 
      <button className={`${styles["accordion"]} ${setActive}`} onClick={toggleAccordion}>
        <p className={styles["accordion__title"]}>{props.title}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles["accordion__content"]}
      >
        <div
          className={styles["accordion__text"]} 
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
