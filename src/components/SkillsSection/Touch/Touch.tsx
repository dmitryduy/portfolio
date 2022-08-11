import React from 'react';
import { useAppSelector } from "../../../hooks/useAppSelector";
import { data, Page } from "../../../data";

import Section from '../../Section/Section';
import SkillCard from "../../SkillCard/SkillCard";

import styles from './Touch.module.scss';

const Touch = () => {
  const language = useAppSelector(state => state.settings.language);

  return (
    <Section sectionName={Page.SKILLS} className={styles.skillsTouchContainer}>
      {data.skills.map(skill =>
        <SkillCard key={skill.id} title={skill.title} icon={skill.icon} color={skill.color}
                   description={skill.description[language]}/>)}
    </Section>


  );
};

export default Touch;
