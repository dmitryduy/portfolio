import React, { FC } from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  text: string
  onClick: () => void
  children?: React.ReactNode
}

const Button: FC<IButtonProps> = ({text, onClick, children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.button}>
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

export default Button;
