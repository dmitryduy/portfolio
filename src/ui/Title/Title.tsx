import React, { FC } from 'react';

import styles from './Title.module.scss';
import cn from "../../utils/cn";

interface ITitleProps {
  title: string
  rotate?: number
  isDecoration?: boolean
}

const Title: FC<ITitleProps> = ({title, rotate= 0, isDecoration=true}) => {
  return (
    <div className={cn({
      [styles.decoration]: isDecoration
    })}>
      <h2 className={styles.title} style={{transform: `rotate(${rotate}deg)`}}>{title}</h2>
      <span className={styles.decorationFirst}/>
      <span className={styles.decorationSecond}/>
    </div>
  );
};

export default Title;
