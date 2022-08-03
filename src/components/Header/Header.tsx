import React from 'react';
import Social from "../Social/Social";
import styles from './Header.module.scss';
import Coder from "../Coder/Coder";
import Button from "../../ui/Button/Button";
import { icons } from "../../icons";

const iconsList: {
  id: number,
  name: keyof typeof icons,
  link: string
}[] = [
  {id: 1, name: 'telegram', link: 'link'},
  {id: 2, name: 'github', link: 'link'},
  {id: 3, name: 'mail', link: 'link'}
]

const str = `import { useLayoutEffect, useState } from "react";

const useMatchMedia = () => {
    const phoneMedia = matchMedia('(max-width: 1000px)');

    const [isPhone, setIsPhone] = useState(phoneMedia.matches);

    useLayoutEffect(() => {
        const handler = () => setIsPhone(phoneMedia.matches);

        phoneMedia.addEventListener('change', handler);

        return () => phoneMedia.removeEventListener('change', handler);

    });

    return isPhone;
};

export default useMatchMedia;
`;

const Header = () => {
  return (
    <div className={`fullwidth ${styles.headerWrapper}`}>
      <div className='container'>
        <header className={styles.headerContainer}>
          <span className={styles.backgroundText}>Johkn JOhanslo</span>
          <aside className={styles.leftSide}>
            <ul className={styles.social}>
              {iconsList.map(icon => <Social key={icon.id} iconName={icon.name} link={icon.link}/>)}
            </ul>
            <h1 className={styles.title}>I am Johkn JOhanslo</h1>
            <p className={styles.briefly}>Hello I frontend developer. I like pony and something else. Thanks for wathing. See u</p>
            <Button onClick={() => {}} text='Portfolio'/>
          </aside>
          <aside className={styles.rightSide}>
            <Coder code={str}/>
          </aside>
        </header>
      </div>
    </div>
  );
};

export default Header;
