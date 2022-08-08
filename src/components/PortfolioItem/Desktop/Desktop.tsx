import React, { FC, useState } from 'react';

import styles from './Desktop.module.scss';
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import cn from "../../../utils/cn";
import { icons } from "../../../icons";
import Button from "../../../ui/Button/Button";
import bg from '../../../images/test.jpg';
import bg2 from '../../../images/test2.jpg';
import SkillList from "../../SkillList/SkillList";

interface IDesktopProps {
  id: number
}



const Desktop: FC<IDesktopProps> = ({id}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

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
        [styles.leftSide]: id % 2 === 0,
        [styles.rightSide]: id % 2 !== 0,
        [styles.show]: showAnimation
      })} onMouseMove={moveHandler}>
        <img className={`${activeImage === 0 ? styles.active : ''} ${styles.image}`} src={bg} alt="bg"/>
        <img className={`${activeImage === 1 ? styles.active : ''} ${styles.image}`} src={bg2} alt="bg"/>
        <img className={`${activeImage === 2 ? styles.active : ''} ${styles.image}`} src={bg} alt="bg"/>
      </div>
      <div className={cn(styles.contentContainer, {
        [styles.reverse]: id % 2 === 0,
        [styles.leftSide]: id % 2 !== 0,
        [styles.show]: showAnimation
      })}>
        <header className={styles.header}>
          <p className={styles.subtitle}>Subtitle</p>
          <h3 className={styles.title}>SOme Portfolio</h3>
        </header>
        <div className={styles.about}>
          <p>SOme text that i dont know thoaumenda cupiditate incidunt iste? Adipisci aperiam assumenda at deleniti
            error, facere ipsam iste iusto maiores, molestiae non nostrum officiis, quod sed.</p>
        </div>
        <footer className={styles.footer}>
         <SkillList/>
          <div className={styles.buttons}>
            <Button text='Github' onClick={() => {
            }}>{icons.github}</Button>
            <Button text='Link' onClick={() => {
            }}>{icons.link}</Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Desktop;