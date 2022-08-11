import React from 'react';
import Section from "../../Section/Section";
import { data, Page } from "../../../data";
import styles from "./Desktop.module.scss";
import Title from "../../../ui/Title/Title";
import PortfolioItem from "../../PortfolioItem/PortfolioItem";

const Desktop = () => {
  return (
    <Section sectionName={Page.PORTFOLIO} className={styles.portfolioContainer}>
      <Title title='Portfolio'/>
      <div className={styles.projects}>
        {data.portfolio.map(project => <PortfolioItem isTouch={false} project={project}/>)}
      </div>
    </Section>
  );
};

export default Desktop;
