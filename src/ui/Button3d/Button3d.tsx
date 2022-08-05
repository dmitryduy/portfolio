import React, { FC } from 'react';

import styles from './Button3d.module.scss';

interface IButton3dProps {
  children: React.ReactNode
}

const Button3d: FC<IButton3dProps> = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Button3d;
