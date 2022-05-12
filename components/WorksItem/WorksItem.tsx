import styles from './WorksItem.module.scss';

type WorksItemProps = {
  year: number;
  title: string;
  role: string;
  description: string;
};

function WorksItem({
  year,
  title,
  role,
  description,
}: WorksItemProps): JSX.Element {
  return (
    <li className={styles.item}>
      <p className={styles.year}>{year}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.description}>{description}</p>
    </li>
  );
}

export default WorksItem;
