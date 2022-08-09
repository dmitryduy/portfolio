import React  from 'react';

import styles from './Menu.module.scss';
import cn from "../../utils/cn";
import { Page } from "../../data";
import useThrottle from "../../hooks/useThrottle";


const tabs = ['Home', 'Experience', 'Skills', 'Portfolio'];

const Menu = () => {
  const [activeTab, setActiveTab] = useThrottle(Page.HEADER, 300);

  const changeTab = (index: number) => {
    window.emitter.emit('page', {prevPage: activeTab, newPage: index});
    setActiveTab(index);
  }

  return (
    <nav className={styles.menuContainer}>
      <ul className={styles.menu}>
        <div className={styles.indicator} style={{transform: `translateX(${activeTab * 90}px)`}}/>
        {tabs.map((tab, index) => (
          <li key={tab} onClick={changeTab.bind(null, index)}
              className={cn(styles.menuItem, {[styles.active]: activeTab === index})}>
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
