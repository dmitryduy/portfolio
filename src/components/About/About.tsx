import React from 'react';
import Experience from "../Experience/Experience";

import styles from './About.module.scss'

import { Page } from "../../data";

import Section from "../Section/Section";

const About = () => {
  return (
    <Section sectionName={Page.EXPERIENCE} className={styles.aboutContainer}>
      <Experience/>
    </Section>
  );
};

export default About;
