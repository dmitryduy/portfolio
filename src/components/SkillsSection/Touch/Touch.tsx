import React from 'react';
import { useAppSelector } from "../../../hooks/useAppSelector";
import { data, Page } from "../../../data";

import InfoCard from "../../InfoCard/InfoCard";
import Section from '../../Section/Section';

const Touch = () => {
  const language = useAppSelector(state => state.settings.language);

  return (
    <Section sectionName={Page.SKILLS}>
      {data.skills.map(skill =>
        <InfoCard key={skill.id} title={skill.title}
                  extraInfo={skill.description[language]} icon={skill.icon} iconColor='#fff'/>)}
    </Section>


  );
};

export default Touch;
