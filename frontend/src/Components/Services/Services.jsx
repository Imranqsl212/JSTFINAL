import service1 from "../../Assets/Services/service1.png";
import service2 from "../../Assets/Services/service2.png";
import service3 from "../../Assets/Services/service3.png";
import service4 from "../../Assets/Services/service4.png";
import styles from "./Services.module.css"; 

export default function Services({ data }) {
  const imageMap = {
    service1: service1,
    service2: service2,
    service3: service3,
    service4: service4,
  };
  return (
    <section id="services" className={styles.services}>
      {data.map((service, index) => {
        return (
          <div data-aos="fade-up" className={styles.service} key={index}>
            <div className={styles.icon}>
              <img src={imageMap[service.icon]} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </section>
  );
}
