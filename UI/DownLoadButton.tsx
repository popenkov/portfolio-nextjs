import { string } from 'yup';
import styles from './DownLoadButton.module.scss';

type DownloadType = {
  href: string;
};

function DownLoadButton({ href }: DownloadType): JSX.Element {
  return (
    <a href={href} download className={styles.btn}>
      <img src="/assets/svg/DownloadIcon.svg" className={styles.downloadIcon} />
      Download CV
    </a>
  );
}

export default DownLoadButton;
