import React, { useState } from 'react';

import styles from './SkillCircle.module.scss'
import Skill from "../Skill/Skill";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { START_ANIMATION_DELAY } from "./SkillCircle.contants";
import cn from "../../utils/cn";
import { data, SkillType } from "../../data";
import { useAppSelector } from "../../hooks/useAppSelector";

const skillSection = ['Frontend', 'Backend', 'Other', 'Not Web']

const SkillCircle = () => {
  const [activeSkills, setActiveSkills] = useState(SkillType.FRONTEND);
  const [showSkills, setShowSkills] = useState(false);
  const language = useAppSelector(state => state.settings.language);

  const skillsRef = useIntersectionObserver(() => {

    setTimeout(() => setShowSkills(true), START_ANIMATION_DELAY);

  }, {threshold: 0});

  const changeSkills = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;
    const id = target.dataset.id;

    if (id && +id !== activeSkills) {
      setActiveSkills(+id);
    }
  }

  return (
    <div className={styles.skillCircle}>
      <div className={styles.contentWrapper}>
        <ul ref={skillsRef} className={styles.content} onClick={changeSkills}
            style={{transform: `translateY(${110 - ((+activeSkills) * (150 - 40))}px)`}}>
          {skillSection.map((item, index) => (
            <li data-id={index} key={index}
                className={cn(styles.title, {[styles.active]: activeSkills === index})}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {showSkills && data.skills.map(skill =>
      skill.type === activeSkills && <Skill key={skill.title} id={skill.position} timerIndex={skill.position} title={skill.title}
               icon={skill.icon} description={skill.description[language]}/>)
      }
    </div>
  );
};

export default SkillCircle;
