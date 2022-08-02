import React, { FC } from 'react';

import styles from './Social.module.scss';
import { icons } from "./icons";


interface ISocialProps {
  iconName: keyof typeof icons
  link: string
}

const Social: FC<ISocialProps> = ({link, iconName}) => {
  return (
    <a href={link} className={styles.socialContainer}>
      {icons[iconName]}
    </a>
  );
};

export default Social;
