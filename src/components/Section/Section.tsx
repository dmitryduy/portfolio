import React, { FC, useEffect, useState } from 'react';
import { Page } from "../../data";
import cn from "../../utils/cn";
import styles from './Section.module.scss';
import useSectionAnimate from "../../hooks/useSectionAnimate";

interface ISectionProps {
  children: React.ReactNode
  sectionName: Page
  className: string
}

const Section: FC<ISectionProps> = ({ children, sectionName, className}) => {
  const [hide, toBottom] = useSectionAnimate(sectionName);
  return (
    <section className={cn(className, styles.sectionContainer, {[styles.hide]: hide, [styles.toBottom]: toBottom})}>
      {children}
    </section>
  );
};

export default Section;
