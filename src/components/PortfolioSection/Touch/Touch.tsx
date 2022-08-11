import React from 'react';
import Section from "../../Section/Section";
import { data, Page } from "../../../data";
import styles from "./Touch.module.scss";
import PortfolioItem from "../../PortfolioItem/PortfolioItem";

const Touch = () => {
  return (
    <Section sectionName={Page.PORTFOLIO} className={styles.portfolioContainer}>
      <div className={styles.projects}>
        {data.portfolio.map(project => <PortfolioItem isTouch={true} project={project}/>)}
      </div>
    </Section>
  );
};

export default Touch;
