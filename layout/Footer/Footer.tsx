import { FooterProps } from './Footer.props';
/* import cn from "classnames"; */
const cn = require('classnames');
import styles from './Footer.module.scss';
import { format } from 'date-fns';
import FooterSocialNet from '../../components/FooterSocialNet/FooterSocialNet';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={styles.footerContainer}>
        <p className={styles.copyright}>
          All rights reserved Popenkov Anton 2020 - {format(new Date(), 'yyyy')}
        </p>
        <FooterSocialNet />
      </div>
    </footer>
  );
};
