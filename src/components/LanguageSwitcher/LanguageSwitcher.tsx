import React, { useState } from 'react';

import styles from './LanguageSwitcher.module.scss';
import Button3d from "../../ui/Button3d/Button3d";
import cn from "../../utils/cn";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppSelector";
import { setLanguage } from "../../reducers/settingsSlice/settingsSlice";


const LanguageSwitcher = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector(state => state.settings.language);

  return (
    <div className={styles.container}>
      <Button3d>
        <div className={cn(styles.content, {
          [styles.en]: language === 'en',
          [styles.ru]: language === 'ru'
        })}>
          <span onClick={()=> dispatch(setLanguage('en'))}>English</span>
          <span onClick={() => dispatch(setLanguage('ru'))}>Русский</span>
        </div>
      </Button3d>
    </div>
  );
};

export default LanguageSwitcher;
