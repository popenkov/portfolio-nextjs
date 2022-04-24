import Link from 'next/link';
import { NavigationLink } from '../../@types/header';
import useSWR from 'swr';
import styles from './Navigation.module.scss';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Navigation(): JSX.Element {
  const { data, error } = useSWR('/api/header', fetcher);

  return (
    <nav className={styles.navigation}>
      {data &&
        data.map((link: NavigationLink) => {
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
