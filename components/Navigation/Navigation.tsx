import Link from "next/link";
import { NavigationLink } from "../../@types/header";
import styles from "./Navigation.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import cn from "classnames";

function Navigation(): JSX.Element {
  const { header } = useAppSelector((state) => state.headerFooter);
  const [activeLink, setActiveLink] = useState("home");
  const onClickLink = (id: string) => {
    setActiveLink(id);
  };

  return (
    <nav className={styles.navigation}>
      {header &&
        header.map((link: NavigationLink) => {
          return (
            <Link key={link.id} href={link.href}>
              <a
                className={cn(styles.navigationLink, {
                  [styles.activeLink]: activeLink === link.id,
                })}
                onClick={() => onClickLink(link.id)}
              >
                {link.title}
              </a>
            </Link>
          );
        })}
    </nav>
  );
}

export default Navigation;
