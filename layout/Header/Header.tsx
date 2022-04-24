import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import Navigation from '../../components/Navigation/Navigation';

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.headerContainer}>
        <HeaderLogo />
        <Navigation />
      </div>
    </header>
  );
};
