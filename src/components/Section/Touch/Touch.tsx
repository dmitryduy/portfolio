import React, { FC } from 'react';
import cn from "../../../utils/cn";
import styles from "./Touch.module.scss";
import { Page } from "../../../data";
import { useAppSelector } from "../../../hooks/useAppSelector";

interface ITouchProps {
  children: React.ReactNode
  sectionName: Page
  className?: string
}

const Touch: FC<ITouchProps> = ({className, sectionName, children}) => {
  const activePage = useAppSelector(state => state.settings.pageInfo.activePage);

  return (
    <section className={cn(styles.sectionContainer, className, {[styles.show]: activePage === sectionName})}>
      {children}
    </section>
  );
};

export default Touch;
