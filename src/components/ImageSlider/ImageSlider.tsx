import React, { FC } from 'react';
import styles from "./ImageSlider.module.scss";
import useThrottle from "../../hooks/useThrottle";
import { icons } from "../../icons";

interface IImageSliderProps {
  images: string[]
  containerWidth: number
}

const ImageSlider: FC<IImageSliderProps> = ({images, containerWidth}) => {
  const [currentImage, setCurrentImage] = useThrottle(0, 300);

  const prevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
      return;
    }

    setCurrentImage(currentImage - 1);
  }


  const nextImage = () => {
    if (currentImage === images.length - 1) {
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
               width: `${containerWidth / images.length - 2}px`,
               transform: `translateX(${containerWidth / images.length * currentImage + 1}px)`
             }}/>
        {images.map((_, index) => <div key={index} className={styles.text}/>)}
      </div>
      <div className={styles.imageContainer} style={{width: containerWidth}}>
        <div className={styles.imageWrapper} style={{transform: `translateX(-${currentImage * containerWidth}px`}}>
          {images.map(image => <img className={styles.image} src={image} alt=""/>)}
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
