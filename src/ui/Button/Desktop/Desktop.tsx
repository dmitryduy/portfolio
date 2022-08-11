import React, { FC } from 'react';
import styles from "./Desktop.module.scss";
import commonStyles from '../Button.module.scss';
import { IButtonProps } from "../Button";

const Desktop: FC<IButtonProps> = ({ text, onClick, children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={commonStyles.button}>
          <p>{text}</p>
          {children}
        </button>
        <button className={`${styles.button} ${styles.bottomButton}`} onClick={onClick}>
          <p>{text}</p>
          {children}
        </button>
      </div>
    </div>
  );
};

export default Desktop;
