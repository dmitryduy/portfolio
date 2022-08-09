import React from 'react';

import styles from './Header.module.scss';
import Greeting from "../Greeting/Greeting";
import { Page } from '../../data';
import Section from "../Section/Section";


const Header = () => {
  return (
    <Section sectionName={Page.HEADER} className={styles.headerContainer}>
      <Greeting/>
    </Section>
  );
};

export default Header;
