import React, { FC } from 'react';

import styles from './Coder.module.scss';
import { beautifyCode } from "../../utils/beautifyCode";
import useTyping from "../../hooks/useTyping";

interface ICoderProps {
  code: string
}


const Coder: FC<ICoderProps> = ({code}) => {
  const actualText = useTyping(code, 5);
  return (
    <div className={styles.coderContainer}>
      <pre className={styles.hidden} dangerouslySetInnerHTML={beautifyCode(code, true)}/>
      <pre className={styles.text} dangerouslySetInnerHTML={beautifyCode(actualText, true)}/>
    </div>
  );
};

export default Coder;
