import React, { FC, useState } from 'react';
import styles from './ExperienceItem.module.scss';
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import cn from "../../utils/cn";
import { i18n } from "../../data";
import { useAppSelector } from "../../hooks/useAppSelector";

interface IExperienceItemProps {
  date: i18n,
  description: i18n
}

const ExperienceItem: FC<IExperienceItemProps> = ({ description, date}) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const language = useAppSelector(state => state.settings.language);

  const textRef = useIntersectionObserver(() => setShowAnimation(true), {threshold: 0.5});

  return (
    <div className={styles.item}>
      <p className={cn(styles.date, {[styles.show]: showAnimation})}>{date[language]}</p>
      <p ref={textRef} className={cn(styles.text, {[styles.show]: showAnimation})}>{description[language]}</p>
    </div>
  );
};

export default ExperienceItem;
