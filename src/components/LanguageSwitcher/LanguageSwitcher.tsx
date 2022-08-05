import React, { useState } from 'react';

import styles from './LanguageSwitcher.module.scss';
import Button3d from "../../ui/Button3d/Button3d";
import cn from "../../utils/cn";


const LanguageSwitcher = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  return (
    <div className={styles.container}>
      <Button3d>
        <div className={cn(styles.content, {
          [styles.en]: language === 'en',
          [styles.ru]: language === 'ru'
        })}>
          <span onClick={()=> setLanguage('en')}>English</span>
          <span onClick={() => setLanguage('ru')}>Русский</span>
        </div>
      </Button3d>
    </div>
  );
};

export default LanguageSwitcher;
