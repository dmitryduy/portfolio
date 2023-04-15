import React from 'react';
import Title from "../../../ui/Title/Title";
import SkillCircle from "../../SkillCircle/SkillCircle";
import { data, Page } from "../../../data";
import styles from "../Skills.module.scss";
import Section from "../../Section/Section";
import { useAppSelector } from "../../../hooks/useAppSelector";

const Desktop = () => {
  const language = useAppSelector(state => state.settings.language);

  return (
    <Section sectionName={Page.SKILLS} className={styles.skillsContainer}>
      <Title title={data.skillsTitle[language]}/>
      <SkillCircle/>
      <div/>
    </Section>
  );
};

export default Desktop;
