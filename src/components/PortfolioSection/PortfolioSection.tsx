import React from 'react';
import Title from "../../ui/Title/Title";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

import styles from './PortfolioSection.module.scss';
import { data, Page, PHONE_BREAKPOINT } from "../../data";
import Section from "../Section/Section";
import useMatchMedia from "../../hooks/useMatchMedia";

const portfolio = data.portfolio;

const PortfolioSection = () => {
  const isTouch = useMatchMedia(`(max-width: ${PHONE_BREAKPOINT}px)`);

  return (
    <Section sectionName={Page.PORTFOLIO} className={styles.portfolioContainer}>
      {!isTouch && <Title title='Portfolio'/>}
      <div className={styles.projects}>
        {portfolio.map(project => <PortfolioItem project={project}/>)}
      </div>
    </Section>

  );
};

export default PortfolioSection;
