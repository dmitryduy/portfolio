import React  from 'react';
import cn from "../../../../utils/cn";
import styles from "./Front.module.scss";
import Button from "../../../../ui/Button/Button";
import { IProject } from "../../../../data";
import { useAppSelector } from "../../../../hooks/useAppSelector";

interface IFrontProps {
  openInfo: () => void,
  className: string
  project: IProject
}


const Front = React.forwardRef<HTMLDivElement, IFrontProps>(({ openInfo,className, project }, ref) => {
  const language = useAppSelector(state => state.settings.language);

  return (
    <div ref={ref} className={cn(styles.front, className)}>
      <p className={styles.counter}>0{project.id}</p>
      <img className={styles.image} src={project.images[1]} alt=""/>
      <p className={styles.subtitle}>{project.subtitle[language]}</p>
      <h5 className={styles.title}>{project.title[language]}</h5>
      <div className={styles.button}>
        <Button text={language === 'en' ? 'Show more': 'Подробнее'} onClick={openInfo}/>
      </div>
    </div>
  );
});

export default Front;
