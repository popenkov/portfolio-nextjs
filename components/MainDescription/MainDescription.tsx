import Image from "next/image";
import styles from "./MainDescription.module.scss";

function MainDescription() {
  return (
    <div className={styles.description}>
      <div className={styles.descriptionText}>
        <p className={styles.title}>
          Hi, I am Your Name A Product Designer based in City.
        </p>
        <p className={styles.subtitle}>
          I help businesses and companies reach their goals by designing
          user-centric digital products & interactive experiences.
        </p>
      </div>
      <Image
        className={styles.portrait}
        src="/assets/images/portrait.png"
        width={400}
        height={400}
      />
    </div>
  );
}

export default MainDescription;
