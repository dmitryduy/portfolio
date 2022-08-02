import React from 'react';

import styles from './SkillCircle.module.scss'
import Skill from "../Skill/Skill";

const SkillCircle = () => {
  return (
    <div className={styles.skillCircle}>
      <h2 className={styles.title}>My Skills</h2>
      <div>
        <Skill id={1} title='JavaScript'/>
        <Skill id={2} title='CSS'/>
        <Skill id={3} title='HTML'/>
        <Skill id={4} title='React'/>
        <Skill id={5} title='Scss, Sass, Less'/>
        <Skill id={6} title='Styled-Components'/>
        <Skill id={7} title='Express.js'/>
        <Skill id={8} title='Nest.js'/>
      </div>
    </div>
  );
};

export default SkillCircle;
