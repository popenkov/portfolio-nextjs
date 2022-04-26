import React, { FunctionComponent, useEffect } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
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
