import React, { useCallback, useRef, useState } from 'react';

import styles from './Touch.module.scss';
import cn from "../../../utils/cn";

import { BLOCK_HEIGHT } from "./Touch.contants";
import Front from "./Front/Front";
import Back from "./Back/Back";


const Touch = () => {

  const [showInfo, setShowInfo] = useState(false);

  const backRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const setHeight = useCallback((height?: number) => {
    if (frontRef.current && backRef.current && containerRef.current) {
      const backHeight = height || backRef.current.scrollHeight;
      frontRef.current.style.height = `${backHeight}px`;
      backRef.current.style.height = `${backHeight}px`;
      containerRef.current.style.height = `${backHeight}px`;
    }
  }, []);

  const openInfo = useCallback(() => {
    setHeight();
    setShowInfo(true);
  }, []);

  const closeInfo = useCallback(() => {
    setHeight(BLOCK_HEIGHT);
    setShowInfo(false);
  }, []);

  return (
    <div ref={containerRef} className={styles.touchContainer}>
      <div className={cn(styles.touchWrapper, {[styles.showInfo]: showInfo})}>
        <Front ref={frontRef} className={styles.face} openInfo={openInfo}/>
        <Back ref={backRef} closeInfo={closeInfo} className={styles.face} imagesCount={4}/>
      </div>
    </div>
  );
};

export default Touch;
