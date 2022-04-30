import React, { FunctionComponent, useEffect } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import Preloader from '../components/Preloader/Preloader';

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <>
      <Preloader />
      <div className={styles.wrapper} {...props}>
        <Header />
        <div className={styles.bodyContainer}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
