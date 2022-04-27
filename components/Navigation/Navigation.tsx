import Link from "next/link";
import { NavigationLink } from "../../@types/header";
import styles from "./Navigation.module.scss";
import { useAppSelector } from "../../redux/hooks";

function Navigation(): JSX.Element {
  const { header } = useAppSelector((state) => state.headerFooter);

  return (
    <nav className={styles.navigation}>
      {header &&
        header.map((link: NavigationLink) => {
          return (
            <Link key={link.id} href={link.href}>
              <a className={styles.navigationLink}>{link.title}</a>
            </Link>
          );
        })}
    </nav>
  );
}

export default Navigation;
