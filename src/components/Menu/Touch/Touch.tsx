import React from 'react';

import styles from './Touch.module.scss';
import { icons } from "../../../icons";
import cn from "../../../utils/cn";
import { Page } from "../../../data";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppSelector";
import { setActivePage } from "../../../reducers/settingsSlice/settingsSlice";


const tabs: {
  page: Page,
  icon: keyof typeof icons
  text: string
}[] = [
  {
    page: Page.HEADER,
    icon: 'home',
    text: 'Home'
  },
  {
    page: Page.EXPERIENCE,
    icon: 'experience',
    text: 'Experience'
  }, {
    page:Page.SKILLS,
    icon: 'skills',
    text: 'Skills'
  }, {
    page: Page.PORTFOLIO,
    icon: 'portfolio',
    text: 'Portfolio'
  }
]

const Touch = () => {
  const pageInfo = useAppSelector(state => state.settings.pageInfo);
  const dispatch = useAppDispatch();

  const changeTab = (page: Page) => {
    dispatch(setActivePage(page));
  }

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          {tabs.map(tab =>
            <li key={tab.page} onClick={changeTab.bind(null, tab.page)}
                className={cn(styles.menuItem, {[styles.active]: pageInfo.activePage === tab.page})}>
              {icons[tab.icon]}
              <span>{tab.text}</span>
            </li>
          )}
        </ul>
        <div className={styles.indicator}/>
      </nav>
    </div>
  );
};

export default Touch;
