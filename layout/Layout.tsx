import React, { FunctionComponent, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { GetServerSideProps } from "next";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";
import { useAppDispatch } from "../redux/hooks";
import { getData } from "../utils/utlils";
import { setHeader, setFooter } from "../redux/reducers/headerFooter";

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  console.log(props);
  /* const { header, footer } = props; */
  const dispatch = useAppDispatch();
  /*  dispatch(setHeader(header));
  dispatch(setFooter(footer)); */
  useEffect(() => {}, []);

  return (
    <div className={styles.wrapper} {...props}>
      <Header />
      <div className={styles.body}>{children}</div>
      <Footer />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Provider store={store}>
        <Layout>
          <Component {...props} />
        </Layout>
      </Provider>
    );
  };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const header = await getData("http://localhost:3000/api/header");
  const footer = await getData("http://localhost:3000/api/footer");
  // here I add some data to the store
  console.log(header, footer);

  /*   store.dispatch(someAction(data)); */
  return {
    props: {
      header,
      footer,
    },
  };
};
