import info1 from "../../Assets/Reccomend/info1.png";
import info2 from "../../Assets/Reccomend/info2.png";
import info3 from "../../Assets/Reccomend/info3.png";
import DestinationCard from "../UI/ReccomendCard/RecCard";
import styles from "./Rec.module.css"; 

export default function Recommend({ data, value, setValue }) {
  const packages = ["All", "Asia", "Europe", "USA"];


  return (
    <section id="recommend" className={styles.section}>
      <div className={styles.title}>
        <h2>Recommended Destinations</h2>
      </div>
      <div className={styles.packages}>
        <ul>
          {packages.map((pkg, index) => (
            <li
              className={value === index ? styles.active : ""}
              onClick={() => setValue(index)}
              key={index}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.destinations}>
        {data.map((destination, index) => (
          <DestinationCard
            key={index}
            destination={destination}
            info1={info1}
            info2={info2}
            info3={info3}
            showBtn={true}
          />
        ))}
      </div>
    </section>
  );
}
