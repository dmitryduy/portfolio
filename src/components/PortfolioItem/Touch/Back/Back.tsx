import React from 'react';
import cn from "../../../../utils/cn";
import Button from "../../../../ui/Button/Button";
import { icons } from "../../../../icons";

import styles from './Back.module.scss'
import ImageSlider from "../../../ImageSlider/ImageSlider";
import SkillList from "../../../SkillList/SkillList";
import { IProject } from "../../../../data";
import { useAppSelector } from "../../../../hooks/useAppSelector";

interface IBackProps {
  closeInfo: () => void
  className: string
  project: IProject
}




const Back = React.forwardRef<HTMLDivElement, IBackProps>(({closeInfo, className, project}, ref) => {
  const language = useAppSelector(state =>state.settings.language);

  return (
    <div className={cn(styles.back, className, )}>
      <div ref={ref} className={styles.backContainer}>
        <span className={styles.closeButton} onClick={closeInfo}>&times;</span>
        <p className={styles.counter}>0{project.id}</p>
        <ImageSlider images={project.images} containerWidth={400}/>
        <h5 className={styles.title}>{project.title[language]}</h5>
        <p className={styles.description}>{project.description[language]}</p>
       <SkillList skills={project.skills}/>
        <div className={styles.buttons}>
          <Button text='Github' onClick={() => {}}>{icons.github}</Button>
          <Button text={language === 'en'? 'Link': 'Ссылка'} onClick={() => {}}>{icons.link}</Button>
        </div>
      </div>
    </div>
  );
});

export default Back;
