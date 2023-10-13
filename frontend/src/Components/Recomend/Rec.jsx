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
            showBtn={true}
          />
        ))}
      </div>
    </section>
  );
}
