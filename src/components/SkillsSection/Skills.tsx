import React from 'react';

import styles from './Skills.module.scss'
import SkillCircle from "../SkillCircle/SkillCircle";
import useMatchMedia from "../../hooks/useMatchMedia";
import Title from "../../ui/Title/Title";
import Section from "../Section/Section";
import { Page } from "../../data";

const SkillsSection = () => {

  const isPhone = useMatchMedia('max-width: 1000px');

  return (
    <Section sectionName={Page.SKILLS} className={styles.skillsContainer}>
      <Title title='Skills'/>
      {!isPhone && <SkillCircle/>}
      <div/>
    </Section>
  );
};

export default SkillsSection;
