import React, { FC } from 'react';
import cn from "../../../utils/cn";
import styles from "./Desktop.module.scss";
import { Page } from "../../../data";
import useSectionAnimate from "../../../hooks/useSectionAnimate";

interface IDesktopProps {
  children: React.ReactNode
  sectionName: Page
  className?: string
}

const Desktop: FC<IDesktopProps> = ({className, sectionName, children}) => {
  const [hide, toBottom] = useSectionAnimate(sectionName);

  return (
    <section className={cn(styles.sectionContainer, {[styles.hide]: hide, [styles.toBottom]: toBottom})}>
      <div className={cn(className, styles.content)}>
        {children}
      </div>
    </section>
  );
};

export default Desktop;
