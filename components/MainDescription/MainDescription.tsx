import Image from "next/image";
import { useAppSelector } from "../../redux/hooks";
import styles from "./MainDescription.module.scss";

function MainDescription() {
  const { mainPage } = useAppSelector((state) => state.mainPage);
  return (
    <div className={styles.description}>
      <div className={styles.descriptionText}>
        <p className={styles.title}>{mainPage.title}</p>
        <p className={styles.title}>{mainPage.title2}</p>
        <p className={styles.subtitle}>{mainPage.subtitle}</p>
      </div>
      <Image
        className={styles.portrait}
        src={mainPage.img.src || "/"}
        width={mainPage.img.width || 0}
        height={mainPage.img.height || 0}
        alt={mainPage.img.alt || "#"}
      />
    </div>
  );
}

export default MainDescription;
