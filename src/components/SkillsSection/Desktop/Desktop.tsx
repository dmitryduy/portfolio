import React from 'react';
import Title from "../../../ui/Title/Title";
import SkillCircle from "../../SkillCircle/SkillCircle";
import { Page } from "../../../data";
import styles from "../Skills.module.scss";
import Section from "../../Section/Section";

const Desktop = () => {
  return (
    <Section sectionName={Page.SKILLS} className={styles.skillsContainer}>
      <Title title='Skills'/>
      <SkillCircle/>
      <div/>
    </Section>
  );
};

export default Desktop;
