import  { useState, useRef, useEffect } from "react";
import styles from "./Accrodion.module.css";

function Accordion(props) {
  const [isActive, setIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isActive ? contentRef.current.scrollHeight : 0);
    }
  }, [isActive]);

  function toggleAccordion() {
    setIsActive(!isActive);
  }

  return (
    <div className={styles["accordion__section"]}>
      <button
        className={`${styles["accordion"]} ${isActive ? styles["active"] : ""}`}
        onClick={toggleAccordion}
      >
        <p className={styles["accordion__title"]}>{props.title}</p>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
        className={styles["accordion__content"]}
      >
        <div className={styles["accordion__text"]}>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
