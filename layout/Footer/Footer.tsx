import { FooterProps } from "./Footer.props";
/* import cn from "classnames"; */
const cn = require("classnames");
import styles from "./Footer.module.scss";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p className={styles.copyright}>2020 - {format(new Date(), "yyyy")}</p>
    </footer>
  );
};
