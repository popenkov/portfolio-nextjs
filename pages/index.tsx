import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { FooterSocialLink, NavigationLink } from "../@types/header";
import MainDescription from "../components/MainDescription/MainDescription";
import { withLayout } from "../layout/Layout";
import { useAppDispatch } from "../redux/hooks";
import {
  fetchHeader,
  fetchFooter,
  setFooter,
  setHeader,
} from "../redux/reducers/headerFooter";
import { makeStore, wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";
import { getData } from "../utils/utlils";

type HomeProps = {
  header: NavigationLink[];
  footer: FooterSocialLink[];
};
const Home: NextPage<HomeProps> = ({ header, footer }) => {
  return (
    <div className={styles.mainContainer}>
      Main Page
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
    }
);
