import React from 'react';
import Section from "../../Section/Section";
import { data, Page } from "../../../data";
import styles from "./Desktop.module.scss";
import Title from "../../../ui/Title/Title";
import ExperienceItem from "../../ExperienceItem/ExperienceItem";

const Desktop = () => {
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

export default Desktop;
