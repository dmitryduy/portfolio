import React, { FC, useEffect, useState } from 'react';
import { icons } from "../../icons";

import styles from './SkillCard.module.scss';
import { SkillTags } from "../../data";
import cn from "../../utils/cn";

interface ISkillCardProps {
  title: string
  icon: keyof typeof icons
  color: string
  skillType: SkillTags
  activeTags: SkillTags[]
}

const SkillCard: FC<ISkillCardProps> = ({activeTags, color, icon, title, skillType}) => {

  return (
    <div className={cn(styles.skillCardContainer, {[styles.hidden]: !activeTags.includes(skillType)})} style={{backgroundColor: color, gridArea: `${icon}`}}>
      {icons[icon]}
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default SkillCard;
