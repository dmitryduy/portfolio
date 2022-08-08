import React from 'react';

import styles from './Header.module.scss';
import Coder from "../Coder/Coder";
import Button from "../../ui/Button/Button";
import TypingText from "../TypingText/TypingText";
import Greeting from "../Greeting/Greeting";
import useMatchMedia from "../../hooks/useMatchMedia";

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

const briefly = 'Hello I frontend developer. I like pony and something else. Thanks for wathing. See uHello I frontend developer. I like pony and something else. Thanks for wathing. See uHello I frontend developer. I like pony and something else. Thanks for wathing. See uHello I frontend developer. I like pony and something else. Thanks for wathing. See u';

const Header = () => {
  const isTablet = useMatchMedia('(max-width: 1200px)');
  console.log(isTablet)
  return (
    <header className={styles.headerContainer}>
      <aside className={styles.leftSide}>
        <Greeting/>
        <TypingText text={briefly}/>
        <Button onClick={() => {
        }} text='Portfolio'/>
      </aside>
      {!isTablet && <aside className={styles.rightSide}>
        <Coder code={str}/>
      </aside>}
    </header>
  );
};

export default Header;
