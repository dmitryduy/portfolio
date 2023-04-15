import React from 'react';
import Section from "../../Section/Section";
import { data, Page } from "../../../data";
import styles from "./Desktop.module.scss";
import Title from "../../../ui/Title/Title";
import PortfolioItem from "../../PortfolioItem/PortfolioItem";
import { useAppSelector } from "../../../hooks/useAppSelector";

const Desktop = () => {
  const language = useAppSelector(state => state.settings.language);

  return (
    <Section sectionName={Page.PORTFOLIO} className={styles.portfolioContainer}>
      <Title title={data.portfolioTitle[language]}/>
      <div className={styles.projects}>
        {data.portfolio.map(project => <PortfolioItem key={project.id} isTouch={false} project={project}/>)}
      </div>
    </Section>
  );
};

export default Desktop;
