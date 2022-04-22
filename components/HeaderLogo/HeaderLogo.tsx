import React from "react";
import LogoIcon from "./fragment.svg";
import styles from "./HeaderLogo.module.scss";

function HeaderLogo(): JSX.Element {
  return <LogoIcon className={styles.logoImg} />;
}

export default HeaderLogo;
