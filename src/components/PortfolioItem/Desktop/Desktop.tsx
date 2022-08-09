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



const Desktop: FC<IDesktopProps> = ({ project}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const language = useAppSelector(state => state.settings.language);

  const portfolioRef = useIntersectionObserver(() => setShowAnimation(true), {threshold: 0.5});

  const moveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const width = target.clientWidth;

    const leftFromPage = target.getBoundingClientRect().left;
    const offsetFromLeftBorder = e.clientX - leftFromPage;
    const imageIndex = Math.floor(offsetFromLeftBorder / (width / 3));
    if (imageIndex !== activeImage) {
      setActiveImage(imageIndex);
    }

  }

  return (
    <div ref={portfolioRef} className={styles.portfolioItem}>
      <div className={cn(styles.imageContainer, {
        [styles.leftSide]: project.id % 2 === 0,
        [styles.rightSide]: project.id % 2 !== 0,
        [styles.show]: showAnimation
      })} onMouseMove={moveHandler}>
        {project.images.map((image, index) =>
          <img key={index} className={cn(styles.image, {[styles.active]: index === activeImage})} src={image} alt=""/>
        )}
      </div>
      <div className={cn(styles.contentContainer, {
        [styles.reverse]: project.id % 2 === 0,
        [styles.leftSide]: project.id % 2 !== 0,
        [styles.show]: showAnimation
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
            <Button text='Github' onClick={noop}>{icons.github}</Button>
            <Button text='Link' onClick={noop}>{icons.link}</Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Desktop;
