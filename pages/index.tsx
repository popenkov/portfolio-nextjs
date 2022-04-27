import type { NextPage } from "next";
import { FooterSocialLink, NavigationLink } from "../@types/header";
import MainDescription from "../components/MainDescription/MainDescription";
import { withLayout } from "../layout/Layout";

import { fetchHeader, fetchFooter } from "../redux/reducers/headerFooter";
import { fetchMain } from "../redux/reducers/mainPage";
import { wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <MainDescription />
    </div>
  );
};

export default withLayout(Home);

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(fetchHeader());
      await dispatch(fetchFooter());
      await dispatch(fetchMain());
    }
);
