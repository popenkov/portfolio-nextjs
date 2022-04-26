import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import Link from "next/link";

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <a>
            <HeaderLogo />
          </a>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};
