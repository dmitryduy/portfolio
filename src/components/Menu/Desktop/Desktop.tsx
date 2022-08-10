import React from 'react';

import { Page } from "../../../data";
import styles from "./Desktop.module.scss";
import cn from "../../../utils/cn";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppSelector";
import { setActivePage } from "../../../reducers/settingsSlice/settingsSlice";

const tabs = ['Home', 'Experience', 'Skills', 'Portfolio'];

const Desktop = () => {
  const activePage = useAppSelector(state => state.settings.pageInfo.activePage);
  const dispatch = useAppDispatch();

  const changeTab = (page: Page) => {
    dispatch(setActivePage(page));
  }

  return (
    <nav className={styles.menuContainer}>
      <ul className={styles.menu}>
        <div className={styles.indicator} style={{transform: `translateX(${activePage * 90}px)`}}/>
        {tabs.map((tab, index) => (
          <li key={tab} onClick={changeTab.bind(null, index)}
              className={cn(styles.menuItem, {[styles.active]: activePage === index})}>
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Desktop;
