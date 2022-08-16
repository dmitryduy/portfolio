import React, { FC } from 'react';
import styles from "./ImageSlider.module.scss";
import useThrottle from "../../hooks/useThrottle";
import { icons } from "../../icons";

interface IImageSliderProps {
  images: string[]
  containerWidth: number
}

const ImageSlider: FC<IImageSliderProps> = ({images, containerWidth}) => {
  const [currentImage, setCurrentImage] = useThrottle(0, 200);
  const [touchPosition, setTouchPosition] = useThrottle({x: 0, y: 0}, 100);

  const prevImage = () => {
    if (currentImage === 0) {
      return;
    }

    setCurrentImage(currentImage - 1);
  }


  const nextImage = () => {
    if (currentImage === images.length - 1) {
      return;
    }

    setCurrentImage(currentImage + 1);
  }

  const touchStart = (e: React.TouchEvent) => {
    setTouchPosition({x: e.touches[0].clientX, y: e.touches[0].clientY});
  }

  const touchEnd = (e: React.TouchEvent) => {
    const [touchEndPositionX, touchEndPositionY] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];

    if (Math.abs(touchPosition.y - touchEndPositionY) > 100) {
      return;
    }

    touchPosition.x - touchEndPositionX > 50 && nextImage();
    touchPosition.x - touchEndPositionX < -50 && prevImage();
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
      <div className={styles.imageContainer}
           style={{width: containerWidth}}
           onTouchStart={touchStart}
           onTouchEnd={touchEnd}>
        <div className={styles.imageWrapper} style={{transform: `translateX(-${currentImage * containerWidth}px`}}>
          {images.map(image =>
            <img key={image} className={styles.image} style={{width: containerWidth}} src={image} alt=""/>)}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
