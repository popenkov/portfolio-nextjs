import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { FooterSocialLink, NavigationLink } from "../@types/header";
import { withLayout } from "../layout/Layout";
import { useAppDispatch } from "../redux/hooks";
import { setFooter, setHeader } from "../redux/reducers/headerFooter";
import { makeStore } from "../redux/store";
import styles from "../styles/Home.module.css";
import { getData } from "../utils/utlils";

type HomeProps = {
  header: NavigationLink[];
  footer: FooterSocialLink[];
};
const Home: NextPage<HomeProps> = ({ header, footer }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setHeader(header));
    dispatch(setFooter(footer));
  }, []);
  return <div className={styles.container}>Main Page</div>;
};

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps = async (context) => {
  let header = await getData("http://localhost:3000/api/header");
  let footer = await getData("http://localhost:3000/api/footer");

  return {
    props: {
      header,
      footer,
    },
  };
};
