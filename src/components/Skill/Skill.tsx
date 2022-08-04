import React, { FC, useEffect, useState } from 'react';

import styles from './Skill.module.scss';
import useThrottle from "../../hooks/useThrottle";
import { DELAY_ANIMATION, THROTTLE_TIMEOUT } from "./Skill.contants";
import { icons } from "../../icons";

interface ISkillProps {
  id: number
  title: string
  color: string
  icon: keyof typeof icons
  description: string
}

const Skill: FC<ISkillProps> = ({id, title, color, icon, description}) => {

  const [show, setShow] = useThrottle(false, THROTTLE_TIMEOUT);
  const [showDot, setShowDot] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setShowDot(true);
    }, (id - 1) * DELAY_ANIMATION);

  }, []);


  const openSkill = () => {
    setShow(!show);
  }

  return (
    <>
      <div className={`${styles.skill} ${show && styles.show} ${id > 5 ? styles.leftSide : styles.rightSide}`}
           data-number={id}>
        <div className={styles.image}>
          {icons[icon]}
        </div>
        <div className={styles.description}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.paragraph}>{description}</p>
        </div>
      </div>
      <span className={`${styles.line} ${show && styles.show}`} data-number={id}/>
      <span onClick={openSkill} className={`${styles.dot} ${show ? styles.show : ''} ${showDot ? '' : styles.hide}`}
            style={{backgroundColor: color}}
            data-number={id}/>
    </>
  );
};

export default Skill;
