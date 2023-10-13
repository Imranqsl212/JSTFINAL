import styles from "./AboutCompany.module.css";
import man from '../../Assets/About/business-2684758__340.png'

const AboutCompany = () => {
  return (
    <section data-aos="fade-right" className={styles.section}>
      <div className={styles.image}>
        <img
          src={man}
          alt="About"
        />
      </div>

      <div className={styles.content}>
        <h2>About Us</h2>
        <hr className={styles.verticalLine} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          aspernatur voluptas inventore ab voluptates nostrum minus illo laborum
          harum laudantium earum ut, temporibus fugiat sequi explicabo facilis
          unde quos corporis!
        </p>
        <ul className={styles.links}>
          <li>
            work
          </li>
          <br />
          <li>
            service
          </li>
          <br />
          <li>
            contact
          </li>
        </ul>
        <ul className={styles.icons}>
          <li>
            <i className="fa fa-twitter"></i>
          </li>
          <li>
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            <i className="fa fa-github"></i>
          </li>
          <li>
            <i className="fa fa-pinterest"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutCompany;
