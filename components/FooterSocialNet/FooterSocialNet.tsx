import { FooterSocialLink } from '../../@types/header';
import useSWR from 'swr';
import styles from './FooterSocialNet.module.scss';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function FooterSocialNet(): JSX.Element {
  const { data, error } = useSWR('/api/footer', fetcher);

  return (
    <div className={styles.socialContainer}>
      {data &&
        data.map((link: FooterSocialLink) => {
          return (
            <a key={link.id} href={link.href} className={styles.socialLink}>
              <img src={link.img} alt={link.id} className={styles.socialImg} />
            </a>
          );
        })}
    </div>
  );
}

export default FooterSocialNet;
