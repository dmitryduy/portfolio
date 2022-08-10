import React from 'react';
import styles from './Desktop.module.scss';
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";
import Social from "../../Social/Social";
import { icons } from "../../../icons";

const iconsList: {
  id: number
  name: keyof typeof icons
  link: string
}[] = [
  {id: 1, name: 'telegram', link: 'link'},
  {id: 2, name: 'github', link: 'link'},
  {id: 3, name: 'mail', link: 'link'}
]

const Desktop = () => {
  return (
    <div className={styles.navigationContainer}>
      <LanguageSwitcher/>
      <ul className={styles.social}>
        {iconsList.map(icon => <Social key={icon.id} iconName={icon.name} link={icon.link}/>)}
      </ul>
    </div>
  );
};

export default Desktop;
