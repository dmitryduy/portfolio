import React, { useState } from 'react';
import styles from './ExperienceItem.module.scss';
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import cn from "../../utils/cn";



const ExperienceItem = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const textRef = useIntersectionObserver(() => setShowAnimation(true), {threshold: 0.5});

  return (
    <div className={styles.item}>
      <p className={cn(styles.date, {[styles.show]: showAnimation})}>September 2021 - November 2021</p>
      <p ref={textRef} className={cn(styles.text, {[styles.show]: showAnimation})}>Lorem <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto atque, blanditiis commodi doloremque enim eos exercitationem ipsum magni minima officiis perferendis ratione reiciendis repellendus tenetur ut vitae? Quae, quo!</span><span>A autem, dolore doloremque exercitationem fuga fugit laborum optio perspiciatis quam ratione saepe voluptates voluptatum! Accusamus accusantium blanditiis deserunt eaque eos facere laboriosam, molestiae placeat repellat soluta sunt unde ut!</span> ipsum
        dolor sit amet, consectetur adipisicing elit. Ab consequatur cupiditate
        deserunt dicta, dolorem dolores eligendi explicabo magni, nam nesciunt nobis numquam omnis placeat
        praesentium tempore ullam ut veniam! Dolorum.</p>
    </div>
  );
};

export default ExperienceItem;
