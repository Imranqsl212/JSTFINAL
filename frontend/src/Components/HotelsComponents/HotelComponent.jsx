import { useState } from "react";
import styles from "./HotelComponent.module.css";
import HotelCard from "../UI/HotelCard/HotelCard";

const HotelComponent = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const filterData = () => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const res = filterData();
  const visible = res.slice(0, visibleItems);

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  const handleWrap = () => {
    setVisibleItems(3);
  };

  return (
    <div className={styles.some}>
      <div className={styles.group}>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          required=""
          type="text"
          className={styles.input}
        />

        <span className={styles.highlight}></span>
        <span className={styles.bar}></span>
      </div>
      <div className={styles.main}>
        {visible.map((item, index) => (
          <HotelCard showBtn={true} key={index} data={item} />
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
