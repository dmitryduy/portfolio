import React, { FC } from 'react';
import styles from "./ImageSlider.module.scss";
import bg from "../../images/test.jpg";
import useThrottle from "../../hooks/useThrottle";
import { icons } from "../../icons";

interface IImageSliderProps {
  imagesCount: number
  startImage: number
  containerWidth: number
}

const ImageSlider: FC<IImageSliderProps> = ({imagesCount, startImage, containerWidth}) => {
  const [currentImage, setCurrentImage] = useThrottle(startImage, 300);

  const prevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(imagesCount - 1);
      return;
    }

    setCurrentImage(currentImage - 1);
  }


  const nextImage = () => {
    if (currentImage === imagesCount - 1) {
      setCurrentImage(0);
      return;
    }

    setCurrentImage(currentImage + 1);
  }

  return (
    <>
      <div className={styles.navigationLine} style={{width: containerWidth}}>
        <div className={styles.scroller}
             style={{
               width: `${containerWidth / imagesCount}px`,
               transform: `translateX(${containerWidth / imagesCount * currentImage}px)`
             }}/>
      </div>
      <div className={styles.imageContainer} style={{width: containerWidth}}>
        <div className={styles.imageWrapper} style={{transform: `translateX(-${currentImage * containerWidth}px`}}>
          <img className={styles.image} src='https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/test.jpg' alt=""/>
          <img className={styles.image} src='https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/test.jpg' alt=""/>
          <img className={styles.image}  src='https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/test.jpg' alt=""/>
          <img className={styles.image}  src='https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/test.jpg' alt=""/>
        </div>
        <div className={styles.imageNavigation}>
          <button onClick={prevImage}>{icons.arrow}</button>
          <button onClick={nextImage}>{icons.arrow}</button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
