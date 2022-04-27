import { FooterSocialLink } from "../../@types/header";
import styles from "./FooterSocialNet.module.scss";
import { useAppSelector } from "../../redux/hooks";

function FooterSocialNet(): JSX.Element {
  const { footer } = useAppSelector((state) => state.headerFooter);

  return (
    <div className={styles.socialContainer}>
      {footer &&
        footer.map((link: FooterSocialLink) => {
          return (
            <a
              key={link.id}
              href={link.href}
              className={styles.socialLink}
              target="_blank"
            >
              <img src={link.img} alt={link.id} className={styles.socialImg} />
            </a>
          );
        })}
    </div>
  );
}

export default FooterSocialNet;
