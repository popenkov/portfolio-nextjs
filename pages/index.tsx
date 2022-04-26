import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <div className={styles.container}>Main Page</div>;
};

export default withLayout(Home);
withLayout;
