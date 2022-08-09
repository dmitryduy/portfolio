import React from 'react';

import styles from './Experience.module.scss';
import Title from "../../ui/Title/Title";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import Section from "../Section/Section";
import { data, Page } from "../../data";

const Experience = () => {

  return (
    <Section sectionName={Page.EXPERIENCE} className={styles.experienceContainer}>
      <Title title='Experience'/>
      <div className={styles.roadmap}>
        {data.experience.map(exp => <ExperienceItem key={exp.id} date={exp.date} description={exp.description}/>)}
        <div className={styles.line}/>
      </div>
    </Section>
  );
};

export default Experience;
