import React from 'react';
import styles from "./Greeting.module.scss";
import { data } from "../../data";

import { useAppSelector } from "../../hooks/useAppSelector";


const Greeting = () => {
  const language = useAppSelector(state => state.settings.language);

  return <h1 className={styles.title}>{data.i18n.headerTitle[language]}</h1>;
};

export default Greeting;
