import React from 'react';
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";

import styles from './Touch.module.scss';

const Touch = () => {
  return (
    <div className={styles.touchContainer}>
      <LanguageSwitcher/>
      <ul className={styles.navigation}>
        <li>Telegram</li>
        <li>Github</li>
        <li>E-mail</li>
      </ul>
    </div>
  );
};

export default Touch;
