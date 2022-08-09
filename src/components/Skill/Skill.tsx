import React, { FC, useEffect, useState } from 'react';

import styles from './Skill.module.scss';
import useThrottle from "../../hooks/useThrottle";
import { DELAY_ANIMATION, THROTTLE_TIMEOUT } from "./Skill.contants";
import { icons } from "../../icons";
import cn from "../../utils/cn";

interface ISkillProps {
  id: number
  title: string
  icon: keyof typeof icons
  description: string
  timerIndex: number
}

const Skill: FC<ISkillProps> = ({id, title, icon, description, timerIndex}) => {

  const [show, setShow] = useThrottle(false, THROTTLE_TIMEOUT);
  const [showDot, setShowDot] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setShowDot(true);
    }, (timerIndex - 1) * DELAY_ANIMATION);

  }, []);


  const openSkill = () => {
    setShow(!show);
  }

  return (
    <>
      <div className={cn(styles.skill, {
        [styles.show]: show,
        [styles.leftSide]: id > 5,
        [styles.rightSide]: id <= 5
      })}
           data-number={id}>
        <span className={styles.image}>{icons[icon]}</span>
        <div className={styles.description}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.paragraph}>{description}</p>
        </div>
      </div>
      <span className={cn(styles.line, {[styles.show]: show})} data-number={id}/>
      <span onClick={openSkill} className={cn(styles.dot, {[styles.show]: show, [styles.hide]: !showDot})}
            data-number={id}/>
    </>
  );
};

export default Skill;
