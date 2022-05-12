import styles from './Works.module.scss';

import Codewars from '../../components/Codewars/Codewars';
import { withLayout } from '../../layout/Layout';
import { wrapper } from '../../redux/store';
import { fetchFooter, fetchHeader } from '../../redux/reducers/headerFooter';
import { fetchMain } from '../../redux/reducers/mainPage';
import WorksList from '../../components/WorksList/WorksList';

function Works() {
  return (
    <div className={styles.worksContainer}>
      <Codewars />
      <WorksList />
    </div>
  );
}

export default withLayout(Works);

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(fetchHeader());
      await dispatch(fetchFooter());
      await dispatch(fetchMain());
    }
);
