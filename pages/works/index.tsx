import styles from './Works.module.scss';

import Codewars from '../../components/Codewars/Codewars';
import { withLayout } from '../../layout/Layout';

function Works() {
  return (
    <div className={styles.worksContainer}>
      <Codewars />
    </div>
  );
}

export default withLayout(Works);
