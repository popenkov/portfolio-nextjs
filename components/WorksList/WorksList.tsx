import styles from './WorksList.module.scss';
import WorksItem from '../WorksItem/WorksItem';
import DownLoadButton from '../../UI/DownLoadButton';
const works = [
  {
    year: 2022,
    title: 'NDA',
    role: 'Front-end developer',
    description: 'description',
  },
  {
    year: 2022,
    title: 'NDA',
    role: 'Front-end developer',
    description: 'description',
  },
  {
    year: 2022,
    title: 'NDA',
    role: 'Front-end developer',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];
function Works(): JSX.Element {
  return (
    <div className={styles.worksContainer}>
      Works
      <DownLoadButton href="#" />
      <ul className={styles.worksList}>
        {works.map((work) => {
          return <WorksItem {...work} />;
        })}
      </ul>
    </div>
  );
}

export default Works;
