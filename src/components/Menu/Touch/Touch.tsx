import React from 'react';

import styles from './Touch.module.scss';
import { icons } from "../../../icons";
import cn from "../../../utils/cn";
import { data, Page } from "../../../data";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppSelector";
import { setActivePage } from "../../../reducers/settingsSlice/settingsSlice";


const Touch = () => {
  const pageInfo = useAppSelector(state => state.settings.pageInfo);
  const language = useAppSelector(state => state.settings.language);
  const dispatch = useAppDispatch();

  const changeTab = (page: Page) => {
    dispatch(setActivePage(page));
  }

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          {data.menu.map(tab =>
            <li key={tab.page} onClick={changeTab.bind(null, tab.page)}
                className={cn(styles.menuItem, {[styles.active]: pageInfo.activePage === tab.page})}>
              {icons[tab.icon]}
              <span>{tab[language]}</span>
            </li>
          )}
        </ul>
        <div className={styles.indicator}/>
      </nav>
    </div>
  );
};

export default Touch;
