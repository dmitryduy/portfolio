import React from 'react';
import Section from "../../Section/Section";
import { data, Page } from "../../../data";
import styles from "./Desktop.module.scss";
import Title from "../../../ui/Title/Title";
import ExperienceItem from "../../ExperienceItem/ExperienceItem";
import { useAppSelector } from "../../../hooks/useAppSelector";

const Desktop = () => {
  const language = useAppSelector(state => state.settings.language);

  return (
    <Section sectionName={Page.EXPERIENCE} className={styles.experienceContainer}>
      <Title title={data.experienceTitle[language]}/>
      <div className={styles.roadmap}>
        {data.experience.map(exp => <ExperienceItem key={exp.id} date={exp.date} description={exp.description}/>)}
        <div className={styles.line}/>
      </div>
    </Section>
  );
};

export default Desktop;
