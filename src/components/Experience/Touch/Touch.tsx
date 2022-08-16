import React, { useState } from 'react';

import styles from './Touch.module.scss';
import Section from "../../Section/Section";
import { data, Page } from "../../../data";
import { useAppSelector } from "../../../hooks/useAppSelector";
import cn from "../../../utils/cn";

const Touch = () => {
  const language = useAppSelector(state => state.settings.language);

  const [activeTab, setActiveTab] = useState({id: data.experience[0].id, index: 0});

  const experience = data.experience.find(exp => exp.id === activeTab.id);

  if (!experience) return null;

  const changeActiveTag = (tabId: number, index: number) => {
    setActiveTab({id: tabId, index});
  }

  return (
    <Section sectionName={Page.EXPERIENCE} className={cn(styles.experienceContainer)}>
      <ul className={styles.tabs}>
        {data.experience.map((exp, index) =>
          <li key={exp.id} onClick={changeActiveTag.bind(null, exp.id, index)}
              className={cn(styles.tab, {[styles.active]: activeTab.id === exp.id})}>{exp.title[language]}</li>
        )}
        <div className={styles.indicator} style={{transform: `translateX(${200*activeTab.index}px)`}}/>
      </ul>
      <div className={styles.content}>
        <h4 className={styles.title}>{experience.title[language]}</h4>
        <p className={styles.date}>{experience.date[language]}</p>
        <p className={styles.description}>{experience.description[language]}</p>
      </div>
    </Section>

  );
};

export default Touch;
