import React, { FC } from 'react';

import styles from './Skill.module.scss';
import './Skill.module.scss';
import useThrottle from "../../hooks/useThrottle";
import { THROTTLE_TIMEOUT } from "./Skill.contants";

interface ISkillProps {
  id: number
  title: string
}

const Skill: FC<ISkillProps> = ({id, title}) => {

  const [show, setShow] = useThrottle(false, THROTTLE_TIMEOUT);

  const openSkill = () => {
    setShow(!show);
  }

  return (
    <>
      <div className={`${styles.skill} ${show && styles.show} ${id > 5 ? styles.leftSide: styles.rightSide}`} data-number={id}>
        <div className={styles.image}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 512 512">
            <path
              d="M429.76,130.07,274.33,36.85a37,37,0,0,0-36.65,0L82.24,130.06A38.2,38.2,0,0,0,64,162.83V349a38.26,38.26,0,0,0,18.24,32.8L123,406.14l.23.13c20.58,10.53,28.46,10.53,37.59,10.53,32.14,0,52.11-20.8,52.11-54.29V182a8.51,8.51,0,0,0-8.42-8.58H182.13a8.51,8.51,0,0,0-8.42,8.58V362.51a15,15,0,0,1-6.85,13.07c-5.9,3.6-14.47,2.84-24.14-2.15l-39.06-23.51a1.1,1.1,0,0,1-.48-.92V165.46a1.32,1.32,0,0,1,.59-1.06l151.84-93a.82.82,0,0,1,.73,0l151.93,93a1.34,1.34,0,0,1,.55,1.1V349a1.28,1.28,0,0,1-.45,1L256.31,440.65a1.22,1.22,0,0,1-.8,0l-38.83-23.06a7.8,7.8,0,0,0-7.83-.41l-.34.2c-10.72,6.35-13.6,8-23.54,11.62-1.62.59-5.43,2-5.76,5.77s3.29,6.45,6.51,8.32l51.9,31.87a35.67,35.67,0,0,0,18.3,5.07l.58,0h0a35.87,35.87,0,0,0,17.83-5.07l155.43-93.13A38.37,38.37,0,0,0,448,349V162.83A38.21,38.21,0,0,0,429.76,130.07Z"/>
            <path
              d="M307.88,318.05c-37.29,0-45.24-10.42-47.6-27.24a8.43,8.43,0,0,0-8.22-7.32h-19.8a8.44,8.44,0,0,0-8.26,8.58c0,14.58,5.12,62.17,83.92,62.17h0c24.38,0,44.66-5.7,58.63-16.49S388,311.26,388,292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89,0-5.47,0-18.28,35.46-18.28,25.23,0,38.74,3.19,43.06,20a8.35,8.35,0,0,0,8.06,6.67h19.87a8.24,8.24,0,0,0,6.16-2.86,8.91,8.91,0,0,0,2.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06,0-73.55,20.75-73.55,55.5,0,38.1,28.49,48.87,71.29,53.33,50,5.17,50,12.71,50,19.37C349.46,304.2,345.15,318.05,307.88,318.05Z"/>
          </svg>
        </div>
        <div className={styles.description}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.paragraph}>This is paragrahpa sometshi else</p>
        </div>
      </div>
      <span className={`${styles.line} ${show && styles.show}`} data-number={id}/>
      <span onClick={openSkill} className={`${styles.dot} ${show && styles.show}`} data-number={id}/>
    </>
  );
};

export default Skill;
