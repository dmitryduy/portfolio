import React from 'react';

import styles from "./Greeting.module.scss";
import { data } from "../../data";
import { useAppSelector } from "../../hooks/useAppSelector";


const Greeting = () => {
  const language = useAppSelector(state => state.settings.language);

  return (
    <div className={styles.greetingContainer}>
      <h1 className={styles.title}>
        <p className={styles.text}>{data.headerSubtitle[language]}</p>
        <div className={styles.text}>
          <span className={styles.decorateText}>{data.headerTitle[language].split(' ')[0]}&nbsp;</span>
          {data.headerTitle[language].split(' ')[1]}
          <div className={styles.lines}>
            <div className={styles.line} style={{width: '100%'}}/>
            <div className={styles.line} style={{width: '80%'}}/>
            <div className={styles.line} style={{width: '60%'}}/>
            <div className={styles.line} style={{width: '40%'}}/>
            <div className={styles.line} style={{width: '20%'}}/>
          </div>
        </div>
      </h1>
    </div>
  )
};

export default Greeting;
