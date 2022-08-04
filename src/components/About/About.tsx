import React from 'react';
import Experience from "../Experience/Experience";

import styles from './About.module.scss'

const About = () => {
  return (
    <section className={styles.aboutContainer} >
        <Experience/>

    </section>
  );
};

export default About;
