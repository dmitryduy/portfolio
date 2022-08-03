import React, { FC } from 'react';

import styles from './Skill.module.scss';
import useThrottle from "../../hooks/useThrottle";
import { THROTTLE_TIMEOUT } from "./Skill.contants";
import { skills } from "./skills";

interface ISkillProps {
  id: number
  title: string
  color: string
  icon: keyof typeof skills
  description: string
}

const Skill: FC<ISkillProps> = ({id, title, color, icon, description}) => {

  const [show, setShow] = useThrottle(false, THROTTLE_TIMEOUT);

  const openSkill = () => {
    setShow(!show);
  }

  return (
    <>
      <div className={`${styles.skill} ${show && styles.show} ${id > 5 ? styles.leftSide : styles.rightSide}`}
           data-number={id}>
        <div className={styles.image}>
          {skills[icon]}
        </div>
        <div className={styles.description}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.paragraph}>{description}</p>
        </div>
      </div>
      <span className={`${styles.line} ${show && styles.show}`} data-number={id}/>
      <span onClick={openSkill} className={`${styles.dot} ${show && styles.show}`} style={{backgroundColor: color}}
            data-number={id}/>
    </>
  );
};

export default Skill;
