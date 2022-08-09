import React, { useState } from 'react';

import styles from './SkillCircle.module.scss'
import Skill from "../Skill/Skill";
import { icons } from "../../icons";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { START_ANIMATION_DELAY } from "./SkillCircle.contants";
import cn from "../../utils/cn";

const skillsArray: {
  id: number
  title: string
  icon: keyof typeof icons
  description: string
}[][] = [
  [
    {id: 1, title: 'JavaScript', icon: 'javaScript', description: 'This is paragrahpa sometshi else'},
    {id: 6, title: 'React', icon: 'react', description: 'This is paragrahpa sometshi else'},
    {id: 2, title: 'CSS', icon: 'css', description: 'This is paragrahpa sometshi else'},
    {id: 7, title: 'Styled-Components', icon: 'styledComponents', description: 'This is paragrahpa sometshi else'},
    {id: 3, title: 'HTML', icon: 'html', description: 'This is paragrahpa sometshi else'},
    {id: 4, title: 'Scss, Sass, Less', icon: 'sass', description: 'This is paragrahpa sometshi else'},
    {id: 8, title: 'Redux', icon: 'redux', description: 'This is paragrahpa sometshi else'},
    {id: 5, title: 'TypeScript', icon: 'typeScript', description: 'This is paragrahpa sometshi else'},
  ],
  [
    {id: 1, title: 'Express.js', icon: 'express', description: 'This is paragrahpa sometshi else'},
    {id: 7, title: 'Nest.js', icon: 'nestjs', description: 'This is paragrahpa sometshi else'},
    {id: 5, title: 'Node.js', icon: 'nodejs', description: 'This is paragrahpa sometshi else'},
  ],
  [
    {id: 1, title: 'Git', icon: 'git', description: 'This is paragrahpa sometshi else'},
    {id: 3, title: 'Angular', icon: 'angular', description: 'This is paragrahpa sometshi else'},
    {id: 5, title: 'JQuery', icon: 'jquery', description: 'This is paragrahpa sometshi else'},
    {id: 6, title: 'npm', icon: 'npm', description: 'This is paragrahpa sometshi else'},
    {id: 8, title: 'BEM', icon: 'bem', description: 'This is paragrahpa sometshi else'},
  ],
  [
    {id: 1, title: 'Python', icon: 'python', description: 'This is paragrahpa sometshi else'},
    {id: 5, title: 'C++', icon: 'cpp', description: 'This is paragrahpa sometshi else'},
    {id: 7, title: 'kotlin', icon: 'kotlin', description: 'This is paragrahpa sometshi else'},
  ],

]

const skillSection = ['Frontend', 'Backend', 'Other', 'Not Web']

const SkillCircle = () => {
  const [activeSkills, setActiveSkills] = useState(0);
  const [showSkills, setShowSkills] = useState(false);

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
      {showSkills && skillsArray[activeSkills].map((skill, index) =>
        <Skill key={skill.title} id={skill.id} timerIndex={index + 1} title={skill.title}
               icon={skill.icon} description={skill.description}/>)
      }
    </div>
  );
};

export default SkillCircle;
