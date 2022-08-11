import React from 'react';

import styles from './Header.module.scss';
import Greeting from "../Greeting/Greeting";
import { Page, PHONE_BREAKPOINT } from '../../data';
import Section from "../Section/Section";
import Navigation from "../Navigation/Navigation";
import useMatchMedia from "../../hooks/useMatchMedia";

const Header = () => {
  const isTouch = useMatchMedia(`(max-width: ${PHONE_BREAKPOINT}px)`);

  return (
    <Section sectionName={Page.HEADER} className={styles.headerContainer}>
      {isTouch ?
        <div className={styles.touchHeaderContainer}>
          <Navigation/>
          <Greeting/>
        </div>
        :
        <>
          <Navigation/>
          <Greeting/>
        </>
      }
    </Section>
  );
};

export default Header;
