import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function CustomLoader() {
  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={80}
      width={80}
      className={styles.Loader}
    />
  );
}
