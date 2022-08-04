import React, { FC } from 'react';
import useTyping from "../../hooks/useTyping";

import styles from './TypingText.module.scss';
interface ITypingTextProps {
  text: string
}

const TypingText: FC<ITypingTextProps> = ({text}) => {
  const actualText = useTyping(text, 10);

  return (
    <div className={styles.container}>
      <p  className={styles.hiddenText}>{text}</p>
      <p className={styles.text}>{actualText}</p>
    </div>
  );
};

export default TypingText;
