import React from 'react';
import Title from "../../ui/Title/Title";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import styles from "./PortfolioSection.module.scss";

const CodeExampleSection = () => {
  return (
    <section>
      <div className={`fullwidth ${styles.portfolioWrapper}`}>
        <div className='container'>
          <div className={styles.portfolioContainer}>
            <Title title='Portfolio'/>
              <PortfolioItem id={1}/>
            <PortfolioItem id={2}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExampleSection;
