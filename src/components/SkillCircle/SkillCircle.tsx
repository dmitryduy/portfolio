import React, { useState } from 'react';

import styles from './SkillCircle.module.scss'
import Skill from "../Skill/Skill";
import { icons } from "../../icons";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { START_ANIMATION_DELAY } from "./SkillCircle.contants";

const skillsArray: {
  title: string
  icon: keyof typeof icons
  description: string
}[][] = [
  [
    {title: 'JavaScript', icon: 'javaScript', description: 'This is paragrahpa sometshi else'},
    {title: 'CSS', icon: 'css', description: 'This is paragrahpa sometshi else'},
    {title: 'HTML', icon: 'html', description: 'This is paragrahpa sometshi else'},
    {title: 'Scss, Sass, Less', icon: 'sass', description: 'This is paragrahpa sometshi else'},
    {title: 'TypeScript', icon: 'typeScript', description: 'This is paragrahpa sometshi else'},
    {title: 'React', icon: 'react', description: 'This is paragrahpa sometshi else'},
    {title: 'Styled-Components', icon: 'styledComponents', description: 'This is paragrahpa sometshi else'},
    {title: 'Redux', icon: 'redux', description: 'This is paragrahpa sometshi else'},
  ],
  [
    {title: 'Express.js', icon: 'express', description: 'This is paragrahpa sometshi else'},
    {title: 'Nest.js', icon: 'nestjs', description: 'This is paragrahpa sometshi else'},
    {title: 'Node.js', icon: 'nodejs', description: 'This is paragrahpa sometshi else'},
  ],
  [
    {title: 'Git', icon: 'git', description: 'This is paragrahpa sometshi else'},
    {title: 'Angular', icon: 'angular', description: 'This is paragrahpa sometshi else'},
    {title: 'JQuery', icon: 'jquery', description: 'This is paragrahpa sometshi else'},
  ],
  [
    {title: 'Python', icon: 'python', description: 'This is paragrahpa sometshi else'},
    {title: 'C++', icon: 'cpp', description: 'This is paragrahpa sometshi else'},
    {title: 'kotlin', icon: 'kotlin', description: 'This is paragrahpa sometshi else'},
  ],

]

const SkillCircle = () => {
  const [activeSkills, setActiveSkills] = useState('0');
  const [showSkills, setShowSkills] = useState(false);
  const skillsRef = useIntersectionObserver(() => {
    setTimeout(() => setShowSkills(true), START_ANIMATION_DELAY);

  }, {threshold: 0.1});

  const changeSkills = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;
    const id = target.dataset.id;

    if (id && id !== activeSkills) {
      setActiveSkills(id);
    }
  }

  return (
    <div className={styles.skillCircle}>
      <div className={styles.contentWrapper}>
        <ul ref={skillsRef} className={styles.content} onClick={changeSkills}
            style={{transform: `translateY(${110 - ((+activeSkills) * (150 - 40))}px)`}}>
          <li data-id={0} className={`${activeSkills === '0' ? styles.active : ''} ${styles.title}`}>Frontend</li>
          <li data-id={1} className={`${activeSkills === '1' ? styles.active : ''} ${styles.title}`}>Backend</li>
          <li data-id={2} className={`${activeSkills === '2' ? styles.active : ''} ${styles.title}`}>Other</li>
          <li data-id={3} className={`${activeSkills === '3' ? styles.active : ''} ${styles.title}`}>Not Web</li>
        </ul>
      </div>
      {showSkills && <div>
        {skillsArray[+activeSkills].map((
          skill, index) =>
          <Skill key={skill.title} id={index + 1} title={skill.title} color='#fff'
                 icon={skill.icon} description={skill.description}/>)}
      </div>}
    </div>
  );
};

export default SkillCircle;
