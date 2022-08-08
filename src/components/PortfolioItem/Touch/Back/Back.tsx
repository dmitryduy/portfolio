import React, { useState } from 'react';
import cn from "../../../../utils/cn";
import Button from "../../../../ui/Button/Button";
import { icons } from "../../../../icons";

import styles from './Back.module.scss'
import ImageSlider from "../../../ImageSlider/ImageSlider";
import SkillList from "../../../SkillList/SkillList";

interface IBackProps {
  closeInfo: () => void
  className: string
  imagesCount: number
}

const Back = React.forwardRef<HTMLDivElement, IBackProps>(({closeInfo, className, imagesCount}, ref) => {
  const [startImage, setStartImage] = useState(0);

  const close = () => {
    setTimeout(() => {
     setStartImage(0);
    }, 300);
    closeInfo();
  }

  return (
    <div className={cn(styles.back, className)}>
      <div ref={ref} className={styles.backContainer}>
        <span className={styles.closeButton} onClick={close}>&times;</span>
        <p className={styles.counter}>01</p>
        <ImageSlider imagesCount={4} startImage={startImage} containerWidth={400}/>
        <h5 className={styles.title}>Telerama onlnint</h5>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut consequatur
          corporis delectus ducimus fugiat iste laudantium minima molestias, nemo non, quas quod, rem sit voluptatum?
          Sequi suscipit unde veniam!</p>
       <SkillList/>
        <div className={styles.buttons}>
          <Button text='github' onClick={() => {
          }}>
            {icons.github}
          </Button>
          <Button text='Link' onClick={() => {
          }}>
            {icons.link}
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Back;
