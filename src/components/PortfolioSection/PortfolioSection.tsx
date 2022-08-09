import React from 'react';
import Title from "../../ui/Title/Title";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

import styles from './PortfolioSection.module.scss';
import { data, Page } from "../../data";
import Section from "../Section/Section";

const portfolio = data.portfolio;

const PortfolioSection = () => {
  return (
    <Section sectionName={Page.PORTFOLIO} className={styles.portfolioContainer}>
      <Title title='Portfolio'/>
      <div className={styles.projects}>
        {portfolio.map(project => <PortfolioItem project={project}/>)}
      </div>
    </Section>

  );
};

export default PortfolioSection;
