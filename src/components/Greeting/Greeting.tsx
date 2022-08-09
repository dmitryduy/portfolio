import React from 'react';
import styles from "./Greeting.module.scss";
import { data } from "../../data";

import { useAppSelector } from "../../hooks/useAppSelector";
import cn from "../../utils/cn";


const Greeting = () => {
  const language = useAppSelector(state => state.settings.language);

  return (
    <div>
      <h1 className={styles.title}>
        <p className={styles.text}>I'm Joch vachington</p>
        <div className={styles.text}>
          <span className={styles.decorateText}>
            <span>frontend&nbsp;</span>
            <span>frontend&nbsp;</span>
          </span>
          developer.
          <div className={styles.lines}>
            <div className={styles.line} style={{width: '100%'}}/>
            <div className={styles.line} style={{width: '80%'}}/>
            <div className={styles.line} style={{width: '60%'}}/>
            <div className={styles.line} style={{width: '40%'}}/>
            <div className={styles.line} style={{width: '20%'}}/>
            <div className={styles.line} style={{width: '1%'}}/>
          </div>
        </div>
      </h1>
    </div>
  )
};

export default Greeting;
