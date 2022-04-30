import PreloaderLogo from './PreloaderLogo.svg';
import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.scss';
import cn from 'classNames';

function Preloader(): JSX.Element {
  const [preload, setPreload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreload(false);
    }, 1200);
  }, []);
  return (
    <div
      id="preloader"
      className={preload === true ? styles.preloader : styles.preloaderDone}
    >
      <span className={styles.preloader__span1}></span>
      <span className="preloader__span2"></span>
      <span className={styles.preloader__span3}></span>
      <span className={styles.preloader__span4}></span>
      <img src="./PreloaderLogo.svg" alt="logo" />
      {/*  {<PreloaderLogo />} */}
    </div>
  );
}

export default Preloader;
