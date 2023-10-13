import { useState } from "react";
import styles from "./HotelComponent.module.css";
import HotelCard from "../UI/HotelCard/HotelCard";

const HotelComponent = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(3);
  const visible = data.slice(0, visibleItems);

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  const handleWrap = () => {
    setVisibleItems(3);
  };

  return (
    <div className={styles.some}>
      <div className={styles.main}>
        {visible.map((item, index) => (
          <HotelCard key={index} data={item} />
        ))}
      </div>
      <br />
      {visibleItems < data.length ? (
        <button className={styles.btn} onClick={handleSeeMore}>
          See More
        </button>
      ) : (
        <button onClick={handleWrap} className={styles.btn}>
          Wrap All
        </button>
      )}
    </div>
  );
};

export default HotelComponent;
