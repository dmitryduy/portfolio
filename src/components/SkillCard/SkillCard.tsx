import React, { FC } from 'react';
import { icons } from "../../icons";

import styles from './SkillCard.module.scss';

interface ISkillCardProps {
  title: string
  description: string
  icon: keyof typeof icons
  color: string
}

const SkillCard: FC<ISkillCardProps> = ({ color, icon, title, description}) => {
  return (
    <div className={styles.skillCardContainer} style={{backgroundColor: color, gridArea: `${icon}`}}>
      {icons[icon]}
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default SkillCard;
