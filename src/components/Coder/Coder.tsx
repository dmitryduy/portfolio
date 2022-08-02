import React, { FC } from 'react';

import styles from './Coder.module.scss';
import { beautifyCode } from "../../utils/beautifyCode";

interface ICoderProps {
  code: string
  rotation?: number
}


const Coder: FC<ICoderProps> = ({code, rotation}) => {
  return (
    <div className={styles.coderContainer} style={{transform: `rotateX(${rotation || 0}deg`}}>
      {code.split('\n').map((codeLine, index) => (
        <pre key={index} dangerouslySetInnerHTML={beautifyCode(index + 1, codeLine)}/>
      ))}
    </div>
  );
};

export default Coder;
