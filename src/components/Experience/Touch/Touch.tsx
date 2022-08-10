import React, { useEffect, useState } from 'react';
import InfoCard from "../../InfoCard/InfoCard";

import styles from './Touch.module.scss';
import Section from "../../Section/Section";
import { data, Page } from "../../../data";
import { useAppSelector } from "../../../hooks/useAppSelector";
import cn from "../../../utils/cn";

const Touch = () => {
  const language = useAppSelector(state => state.settings.language);

  return (
    <Section sectionName={Page.EXPERIENCE} className={cn(styles.experienceContainer)}>
      {data.experience.map(exp =>
        <InfoCard key={exp.id} title={exp.title[language]}
                  extraInfo={exp.description[language]} subtitle={exp.date[language]}/>)}

    </Section>

  );
};

export default Touch;
