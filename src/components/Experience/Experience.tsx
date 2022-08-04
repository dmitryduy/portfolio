import React from 'react';

import styles from './Experience.module.scss';
import Title from "../../ui/Title/Title";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

const Experience = () => {

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.titleContainer}>
        <Title title='Experience' rotate={-90} isDecoration={false}/>
      </div>
      <div className={styles.roadmap}>
        <ExperienceItem/>
        <ExperienceItem/>
        <ExperienceItem/>
        <ExperienceItem/>
        <ExperienceItem/>
        <div className={styles.line}/>
      </div>
    </div>
  );
};

export default Experience;
