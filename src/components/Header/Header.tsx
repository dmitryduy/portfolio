import React from 'react';

import styles from './Header.module.scss';
import Greeting from "../Greeting/Greeting";
import { Page } from '../../data';
import Section from "../Section/Section";
import Navigation from "../Navigation/Navigation";
import ResumeButton from "../ResumeButton/ResumeButton";


const Header = () => {
  return (
    <Section sectionName={Page.HEADER} className={styles.headerContainer}>
      <ResumeButton/>
      <Navigation/>
      <Greeting/>
    </Section>
  );
};

export default Header;
