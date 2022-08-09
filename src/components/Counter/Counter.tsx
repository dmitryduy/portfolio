import React from 'react';

import styles from './Counter.module.scss';
import cn from "../../utils/cn";

const Counter = () => {
  return (
    <div className={styles.counterContainer}>
      <div  className={cn(styles.dot, styles.active)}/>
      <div  className={styles.dot}/>
      <div className={styles.dot}/>
      <div  className={styles.dot}/>
    </div>
  );
};

export default Counter;
