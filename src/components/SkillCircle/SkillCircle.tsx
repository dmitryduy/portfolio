import React from 'react';

import styles from './SkillCircle.module.scss'
import Skill from "../Skill/Skill";

const SkillCircle = () => {
  return (
    <div className={styles.skillCircle}>
      <div className={styles.content}>
        <h2 className={styles.title}>My Skills</h2>
      </div>
      <div>
        <Skill id={1} title='JavaScript' color='#fff' icon='javaScript' description='This is paragrahpa sometshi else'/>
        <Skill id={2} title='CSS' color='#fff' icon='css' description='This is paragrahpa sometshi else'/>
        <Skill id={3} title='HTML' color='#fff' icon='html' description='This is paragrahpa sometshi else'/>
        <Skill id={4} title='React' color='#fff' icon='react' description='This is paragrahpa sometshi else'/>
        <Skill id={5} title='Scss, Sass, Less' color='#fff' icon='sass' description='This is paragrahpa sometshi else'/>
        <Skill id={6} title='Styled-Components' color='#fff' icon='javaScript' description='This is paragrahpa sometshi else'/>
        <Skill id={7} title='Express.js' color='#fff' icon='express' description='This is paragrahpa sometshi else'/>
        <Skill id={8} title='Nest.js' color='#fff' icon='nestjs' description='This is paragrahpa sometshi else'/>
      </div>
    </div>
  );
};

export default SkillCircle;
