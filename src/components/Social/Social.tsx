import React, { FC } from 'react';

import styles from './Social.module.scss';
import { icons } from "../../icons";
import Button3d from "../../ui/Button3d/Button3d";


interface ISocialProps {
  iconName: keyof typeof icons
  link: string
}

const Social: FC<ISocialProps> = ({link, iconName}) => {
  return (
    <div>
      <Button3d>
        <a href={link} className={styles.socialContainer}>
          {icons[iconName]}
        </a>
      </Button3d>
    </div>
  );
};

export default Social;
