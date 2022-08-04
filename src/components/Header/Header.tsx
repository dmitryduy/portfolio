import React from 'react';
import Social from "../Social/Social";
import styles from './Header.module.scss';
import Coder from "../Coder/Coder";
import Button from "../../ui/Button/Button";
import { icons } from "../../icons";
import { LETTER_ANIMATION_DELAY } from "./Header.constants";
import cn from "../../utils/cn";
import noop from "../../utils/noop";
import TypingText from "../TypingText/TypingText";

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

const greetings = 'I\'m Johkn JOhanslo';
const briefly = 'Hello I frontend developer. I like pony and something else. Thanks for wathing. See uHello I frontend developer. I like pony and something else. Thanks for wathing. See uHello I frontend developer. I like pony and something else. Thanks for wathing. See uHello I frontend developer. I like pony and something else. Thanks for wathing. See u';

const Header = () => {
  console.log('render')

  const letterAnimateHandler = (e: React.MouseEvent<HTMLPreElement>) => {
    const target = e.target as HTMLPreElement;

    target.classList.add(styles.animate);

    setTimeout(() => {
      target.classList.remove(styles.animate);
    }, LETTER_ANIMATION_DELAY);
  }
  return (
    <div className={`fullwidth ${styles.headerWrapper}`}>
      <div className='container'>
        <header className={styles.headerContainer}>
          <span className={styles.backgroundText}>Johkn JOhanslo</span>
          <aside className={styles.leftSide}>
            <ul className={styles.social}>
              {iconsList.map(icon => <Social key={icon.id} iconName={icon.name} link={icon.link}/>)}
            </ul>
            <span className={styles.letter}></span>
            <h1 className={styles.title}>{greetings.split('').map((letter, index) => <pre className={cn(styles.letter, {
              [styles.firstLetter]: !index
            })}
                                                                                          onMouseEnter={index ? letterAnimateHandler: noop}
                                                                                          key={index}>{letter}</pre>)}</h1>
            <TypingText text={briefly}/>
            <Button onClick={() => {
            }} text='Portfolio'/>
          </aside>
          {/*<aside className={styles.rightSide}>
            <Coder code={str}/>
          </aside>*/}
        </header>
      </div>
    </div>
  );
};

export default Header;
