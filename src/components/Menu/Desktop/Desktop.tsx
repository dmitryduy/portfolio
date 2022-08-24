import React from 'react';

import { data, Page } from "../../../data";
import styles from "./Desktop.module.scss";
import cn from "../../../utils/cn";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppSelector";
import { setActivePage } from "../../../reducers/settingsSlice/settingsSlice";

const Desktop = () => {
  const activePage = useAppSelector(state => state.settings.pageInfo.activePage);
  const language = useAppSelector(state => state.settings.language);
  const dispatch = useAppDispatch();

  const changeTab = (page: Page) => {
    dispatch(setActivePage(page));
  }

  return (
    <nav className={styles.menuContainer}>
      <ul className={styles.menu}>
        <div className={styles.indicator} style={{transform: `translateX(${activePage * 110}px)`}}/>
        {data.menu.map((menuItem, index) => (
          <li key={index} onClick={changeTab.bind(null, index)}
              className={cn(styles.menuItem, {[styles.active]: activePage === index})}>
            {menuItem[language]}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Desktop;
