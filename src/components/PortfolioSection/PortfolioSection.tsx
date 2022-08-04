import React from 'react';
import Title from "../../ui/Title/Title";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

import styles from './PortfolioSection.module.scss';

const CodeExampleSection = () => {
  return (
    <section className={styles.portfolioContainer}>
      <Title title='Portfolio'/>
      <div className={styles.projects}>
        <PortfolioItem id={0}/>
        <PortfolioItem id={1}/>
        <PortfolioItem id={2}/>
        <PortfolioItem id={3}/>
      </div>

    </section>
  );
};

export default CodeExampleSection;
