import React, { FC, useState } from 'react';

import styles from './Desktop.module.scss';
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import cn from "../../../utils/cn";
import { icons } from "../../../icons";
import Button from "../../../ui/Button/Button";
import SkillList from "../../SkillList/SkillList";
import { IProject } from "../../../data";
import { useAppSelector } from "../../../hooks/useAppSelector";
import noop from "../../../utils/noop";

interface IDesktopProps {
  project: IProject
}


const Desktop: FC<IDesktopProps> = ({project}) => {
  const language = useAppSelector(state => state.settings.language);


  return (
    <div className={styles.portfolioItem}>
      <div className={cn(styles.imageContainer, {
        [styles.leftSide]: project.id % 2 === 0,
        [styles.rightSide]: project.id % 2 !== 0
      })}>
        <img className={styles.image} src={project.images[0]} alt=""/>
      </div>
      <div className={cn(styles.contentContainer, {
        [styles.reverse]: project.id % 2 === 0,
        [styles.leftSide]: project.id % 2 !== 0,
      })}>
        <header className={styles.header}>
          <p className={styles.subtitle}>{project.subtitle[language]}</p>
          <h3 className={styles.title}>{project.title[language]}</h3>
        </header>
        <p className={styles.about}>{project.description[language]}</p>
        <footer className={styles.footer}>
          <div className={styles.skillList}>
            <SkillList skills={project.skills}/>
          </div>
          <div className={styles.buttons}>
            <a href={project.github} target='_blank'>
              <Button text='Github' onClick={noop}>{icons.github}</Button>
            </a>
            {project.link && <a href={project.link} target='_blank'>
                <Button text='Link' onClick={noop}>{icons.link}</Button>
            </a>}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Desktop;
