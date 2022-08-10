import React  from 'react';

import styles from './Header.module.scss';
import Greeting from "../Greeting/Greeting";
import { Page, PHONE_BREAKPOINT } from '../../data';
import Section from "../Section/Section";
import Navigation from "../Navigation/Navigation";
import useMatchMedia from "../../hooks/useMatchMedia";
import { useAppDispatch } from "../../hooks/useAppSelector";
import { setActivePage } from "../../reducers/settingsSlice/settingsSlice";


const Header = () => {
  const isTouch = useMatchMedia(`(max-width: ${PHONE_BREAKPOINT}px)`);
  const dispatch = useAppDispatch();


  const showPortfolio = () => {
    dispatch(setActivePage(Page.EXPERIENCE));
    window.scrollTo({top: window.outerHeight, behavior: 'smooth'});
  }


  return (
    isTouch ?
      <div className={styles.touchHeaderContainer}>
        <Navigation/>
        <Greeting/>
        <button className={styles.portfolioButton} onClick={showPortfolio}>Portfolio</button>
      </div>
      :
      <Section sectionName={Page.HEADER} className={styles.headerContainer}>
        <Navigation/>
        <Greeting/>
      </Section>
  );
};

export default Header;
