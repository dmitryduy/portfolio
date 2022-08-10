import React, { FC, useCallback, useRef, useState } from 'react';

import styles from './Touch.module.scss';

import { BLOCK_HEIGHT } from "./Touch.contants";
import Front from "./Front/Front";
import Back from "./Back/Back";
import { IProject, TOUCH_CONTAINER_PADDING } from "../../../data";
import useResize from "../../../hooks/useResize";

interface ITouchProps {
  project: IProject
}

const Touch: FC<ITouchProps> = ({project}) => {

  const [showInfo, setShowInfo] = useState(false);
  const width = useResize() + TOUCH_CONTAINER_PADDING * 2;

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
      <div className={styles.touchWrapper} style={{
        transform:
          showInfo ? `translateZ(-${width / 2}px) rotateY(-90deg)` : `translateZ(${-width / 2}px)`
      }}>
        <Front ref={frontRef} className={styles.face} openInfo={openInfo} project={project}/>
        <Back ref={backRef} closeInfo={closeInfo} className={styles.face} project={project}/>
      </div>
    </div>
  );
};

export default Touch;
