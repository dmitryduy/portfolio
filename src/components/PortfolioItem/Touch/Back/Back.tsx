import React from 'react';
import cn from "../../../../utils/cn";
import Button from "../../../../ui/Button/Button";
import { icons } from "../../../../icons";

import styles from './Back.module.scss'
import ImageSlider from "../../../ImageSlider/ImageSlider";
import SkillList from "../../../SkillList/SkillList";
import { IProject, TOUCH_CONTAINER_PADDING } from "../../../../data";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import useResize from "../../../../hooks/useResize";
import noop from "../../../../utils/noop";

interface IBackProps {
  closeInfo: () => void
  className: string
  project: IProject
}


const Back = React.forwardRef<HTMLDivElement, IBackProps>(({closeInfo, className, project}, ref) => {
  const language = useAppSelector(state => state.settings.language);
  const width = useResize();

  return (
    <div className={cn(styles.back, className)} style={{transform: `rotateY(90deg) translateZ(${width / 2}px)`}}>
      <div ref={ref} className={styles.backContainer}>
        <span className={styles.closeButton} onClick={closeInfo}>&times;</span>
        <p className={styles.counter}>0{project.id}</p>
        <ImageSlider images={project.images}
                     containerWidth={width <= 750 ? width - TOUCH_CONTAINER_PADDING * 2 : width / 2 - TOUCH_CONTAINER_PADDING * 2}/>
        <h5 className={styles.title}>{project.title[language]}</h5>
        <p className={styles.description}>{project.description[language]}</p>
        <SkillList skills={project.skills}/>
        <div className={styles.buttons}>
          <a href={project.github} target='_blank'>
            <Button text='Github' onClick={noop}>{icons.github}</Button>
          </a>
          {project.link && <a href={project.link} target='_blank'>
              <Button text={language === 'en' ? 'Link' : 'Ссылка'} onClick={noop}>{icons.link}</Button>
          </a>}
        </div>
      </div>
    </div>
  );
});

export default Back;
