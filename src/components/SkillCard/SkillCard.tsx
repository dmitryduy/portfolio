import React, { FC, useEffect, useState } from 'react';
import { icons } from "../../icons";

import styles from './SkillCard.module.scss';
import { SkillTags } from "../../data";
import cn from "../../utils/cn";

interface ISkillCardProps {
  title: string
  description: string
  icon: keyof typeof icons
  color: string
  skillType: SkillTags
}

const SkillCard: FC<ISkillCardProps> = ({ color, icon, title, description, skillType}) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() =>{
    window.emitter.on('tag-update', (data) => {
      if (data && data.tag === skillType) {
        setHidden(prev => !prev);
      }
    })

    return () => window.emitter.un('tag-update');
  }, []);
  console.log(hidden)

  return (
    <div className={cn(styles.skillCardContainer, {[styles.hidden]: hidden})} style={{backgroundColor: color, gridArea: `${icon}`}}>
      {icons[icon]}
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default SkillCard;
