import React, { FC, useEffect, useRef, useState } from 'react';
import { icons } from "../../icons";

import styles from './InfoCard.module.scss';
import cn from "../../utils/cn";

interface IInfoCardProps {
  icon?: keyof typeof icons
  iconColor?: string
  title: string
  subtitle?: string
  extraInfo: string
}

const InfoCard: FC<IInfoCardProps> = ({iconColor, icon, extraInfo, title, subtitle}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [content, setContent] = useState({hasHidden: false, isHidden: false});

    const openContent = () => {
      if (contentRef.current && cardRef.current) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        contentRef.current.style.marginTop = '20px';
        cardRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        console.log(20)
        setContent(prev => ({...prev, isHidden: false}));
      }

    }

    const hideContent = () => {
      if (contentRef.current && cardRef.current) {
        contentRef.current.style.height = `50px`;
        contentRef.current.style.marginTop = '0';
        cardRef.current.style.height = `70px`;
        setContent(prev => ({...prev, isHidden: true}));
      }


    }

    useEffect(() => {
      if (contentRef.current && contentRef.current.scrollHeight > 70) {
        setContent({hasHidden: true, isHidden: true});
      }
    }, []);

    return (
      <div ref={cardRef} className={styles.infoCardContainer}>
        {icon && <div style={{backgroundColor: iconColor}} className={styles.icon}>{icons[icon]}</div>}
        <div ref={contentRef} className={styles.info}>
          <h6 className={styles.title}>{title}</h6>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <p className={styles.extraInfo}>{extraInfo}</p>
        </div>
        {content.hasHidden && <div className={styles.buttonsContainer}>
            <div className={cn(styles.buttonsWrapper, {[styles.hideButtonShow]: !content.isHidden})}>
                <button className={styles.button} onClick={openContent}><span>Open</span></button>
                <button className={styles.button} onClick={hideContent}><span>Hide</span></button>
            </div>
        </div>}
      </div>
    );
  }
;

export default InfoCard;
