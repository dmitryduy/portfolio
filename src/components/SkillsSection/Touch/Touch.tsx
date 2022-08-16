import React, { useState } from 'react';
import { useAppSelector } from "../../../hooks/useAppSelector";
import { data, Page, SkillTags } from "../../../data";

import Section from '../../Section/Section';
import SkillCard from "../../SkillCard/SkillCard";

import styles from './Touch.module.scss';
import cn from "../../../utils/cn";

const skillTags = [{
  tag: 'Frontend',
  skillType: SkillTags.FRONTEND
},
  {
    tag: 'Backend',
    skillType: SkillTags.BACKEND
  }, {
    tag: 'Other',
    skillType: SkillTags.OTHER
  },
  {
    tag: 'Not Web',
    skillType: SkillTags.NOT_WEB
  }];


const Touch = () => {
  const [activeTags, setActiveTags] = useState([SkillTags.OTHER, SkillTags.NOT_WEB, SkillTags.BACKEND, SkillTags.FRONTEND]);

  const tagsHandler = (tag: number) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(activeTag => activeTag !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  }


  return (
    <Section sectionName={Page.SKILLS}>
      <ul className={styles.skillTags}>
        {skillTags.map(tag =>
          <li onClick={tagsHandler.bind(null, tag.skillType)}
              key={tag.tag}
              className={cn(styles.skillTag, {[styles.active]: activeTags.includes(tag.skillType)})}
          >
            {tag.tag}
          </li>
        )}
      </ul>
      <div className={styles.skillsTouchContainer}>
        {data.skills.map(skill =>
          <SkillCard activeTags={activeTags}
                     skillType={skill.type}
                     key={skill.id}
                     title={skill.title}
                     icon={skill.icon}
                     color={skill.color}
          />)}
      </div>
    </Section>
  );
};

export default Touch;
