import React, { FC, useRef } from 'react';
import cn from "../../../../utils/cn";
import styles from "./Front.module.scss";
import bg from "../../../../images/test.jpg";
import Button from "../../../../ui/Button/Button";

interface IFrontProps {
  openInfo: () => void,
  className: string
}

const Front = React.forwardRef<HTMLDivElement, IFrontProps>(({ openInfo,className }, ref) => {

  return (
    <div ref={ref} className={cn(styles.front, className)}>
      <p className={styles.counter}>01</p>
      <img className={styles.image} src={bg} alt=""/>
      <p className={styles.subtitle}>Front</p>
      <h5 className={styles.title}>Telerama onlnint</h5>
      <div className={styles.button}>
        <Button text='Show more' onClick={openInfo}/>
      </div>
    </div>
  );
});

export default Front;
