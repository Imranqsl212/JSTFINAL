import styles from "./Team.module.css";
import member1 from "../../Assets/About/Team/photo1.png";
import member2 from "../../Assets/About/Team/photo2.png";
import member3 from "../../Assets/About/Team/photo3.png";
import member4 from "../../Assets/About/Team/photo4.png";
import member5 from "../../Assets/About/Team/photo5.png";
import member6 from "../../Assets/About/Team/photo6.png";

const Team = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>
          <h3>The creative crew</h3>
        </div>
        <div className={styles.content}>
          <h5>who we are</h5>
          <p>
            We are a team of creatively diverse, driven, innovative individuals
            working in various locations from around the world.
          </p>
        </div>
      </header>

      <section data-aos="flip-left" className={styles.main}>
        <div className={styles.profile}>
          <figure data-value="product owner">
            <img src={member1} alt="" />
            <figcaption>bill mahoney</figcaption>
          </figure>
        </div>

        <div className={styles.profile}>
          <figure data-value="art director">
            <img src={member2} alt="" />
            <figcaption>saba cabrera</figcaption>
          </figure>
        </div>

        <div className={styles.profile}>
          <figure data-value="tech lead">
            <img src={member3} alt="" />
            <figcaption>shae le</figcaption>
          </figure>
        </div>

        <div className={styles.profile}>
          <figure data-value="ux designer">
            <img src={member4} alt="" />
            <figcaption>skylah lu</figcaption>
          </figure>
        </div>

        <div className={styles.profile}>
          <figure data-value="developer">
            <img src={member5} alt="" />
            <figcaption>griff richards</figcaption>
          </figure>
        </div>

        <div className={styles.profile}>
          <figure data-value="developer">
            <img src={member6} alt="" />
            <figcaption>stan john</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Team;
